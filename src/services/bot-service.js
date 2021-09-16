import { getBoard } from './game-service.js'

export const botService = {
	easyBotSelectMove,
}

function easyBotSelectMove() {
	const moves = getLegalMoves()
	return _getRandomInt(0, moves.length)
}

function getLegalMoves() {
	const board = getBoard()
	return board.filter(cell => !cell)
}

function _getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
