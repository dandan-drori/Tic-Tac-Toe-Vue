import Vue from 'vue'
import Vuex from 'vuex'
import {
	getBoard,
	getScore,
	onMarkCell,
	onCheckGameOver,
	onClearBoard,
} from '../services/game-service.js'
import {
	easyBotSelectMove,
	mediumBotSelectMove,
	hardBotSelectMove,
} from '../services/bot-service.js'
import { storageService } from '@/services/storage-service.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mode: '',
		board: getBoard(),
		turn: 'X',
		winner: '',
		score: storageService.getFromStorage('score') || getScore(),
	},
	getters: {
		board(state) {
			return state.board
		},
		turn(state) {
			return state.turn
		},
		winner(state) {
			return state.winner
		},
		score(state) {
			return state.score
		},
		mode(state) {
			return state.mode
		},
	},
	mutations: {
		markCell(state, { idx, shape }) {
			onMarkCell(idx, shape)
			if (state.mode === 'pvp') return
			if (onCheckGameOver(state.board)) return
			const bots = {
				easy: easyBotSelectMove,
				medium: mediumBotSelectMove,
				hard: hardBotSelectMove,
			}
			const botIdx = bots[state.mode](state.board)
			if (botIdx === -1) return
			onMarkCell(botIdx, 'O')
		},
		switchTurn(state) {
			state.turn = state.turn === 'X' ? 'O' : 'X'
		},
		checkGameOver(state) {
			const winner = onCheckGameOver(state.board)
			state.winner = winner
			if (winner === 'tie') return
			if (winner) state.score[state.mode][winner]++
			storageService.setInStorage('score', state.score)
		},
		clearBoard(state) {
			onClearBoard()
			state.winner = ''
			state.turn = 'X'
		},
		resetScore(state) {
			localStorage.clear()
			state.score = getScore()
		},
		setMode(state, mode) {
			state.mode = mode
		},
	},
})
