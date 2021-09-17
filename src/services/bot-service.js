import { onMarkCell, onCheckGameOver } from './game-service.js'

export { easyBotSelectMove, mediumBotSelectMove }

function easyBotSelectMove(board) {
	const moves = getLegalMoves(board)
	const randIdx = _getRandomInt(0, moves.length)
	if (!moves.length) return -1
	return moves[randIdx]
}

function mediumBotSelectMove(board) {
	const moves = getLegalMoves(board)
	if (!moves.length) return -1
	for (let i = 0; i < moves.length; i++) {
		const currMove = moves[i]
		const newBoard = JSON.parse(JSON.stringify(board))
		newBoard.splice(currMove, 1, 'O')
		const winner = onCheckGameOver(newBoard)
		if (winner) return currMove
		newBoard.splice(currMove, 1, 'X')
		const playerWins = onCheckGameOver(newBoard)
		if (playerWins) return currMove
	}
	const randIdx = _getRandomInt(0, moves.length)
	return moves[randIdx]
}

function hardBotSelectMove(board) {}

function getLegalMoves(board) {
	return board
		.map((cell, idx) => {
			if (!cell) {
				return idx
			}
		})
		.filter(t => t || t === 0)
}

function _getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
