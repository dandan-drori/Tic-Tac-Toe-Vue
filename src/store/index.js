import Vue from 'vue'
import Vuex from 'vuex'
import {
	getBoard,
	getScore,
	onMarkCell,
	onCheckGameOver,
	onClearBoard,
} from '../services/game-service.js'
import { easyBotSelectMove, mediumBotSelectMove } from '../services/bot-service.js'
import { storageService } from '@/services/storage-service.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mode: 'medium',
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
	},
	mutations: {
		markCell(state, { idx, shape }) {
			onMarkCell(idx, shape)
			if (state.mode === 'pvp') return
			if (onCheckGameOver(state.board)) return
			let botIdx
			if (state.mode === 'easy') {
				botIdx = easyBotSelectMove(state.board)
			} else if (state.mode === 'medium') {
				botIdx = mediumBotSelectMove(state.board)
			}
			if (botIdx === -1) return
			onMarkCell(botIdx, 'O')
		},
		switchTurn(state) {
			if (state.mode !== 'pvp') return
			state.turn = state.turn === 'X' ? 'O' : 'X'
		},
		checkGameOver(state) {
			const winner = onCheckGameOver(state.board)
			state.winner = winner
			if (winner) state.score[winner]++
			storageService.setInStorage('score', state.score)
		},
		clearBoard(state) {
			onClearBoard()
			state.winner = ''
			state.turn = 'X'
		},
		resetScore(state) {
			localStorage.clear()
			state.score = { X: 0, O: 0 }
		},
	},
})
