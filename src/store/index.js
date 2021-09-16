import Vue from 'vue'
import Vuex from 'vuex'
import {
	getBoard,
	getScore,
	onMarkCell,
	onCheckGameOver,
	onClearBoard,
} from '../services/game-service.js'
import { storageService } from '@/services/storage-service.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
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
		},
		switchTurn(state) {
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
