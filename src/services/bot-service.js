import { getLastMove, onCheckGameOver } from './game-service.js'

export { easyBotSelectMove, mediumBotSelectMove, hardBotSelectMove }

function easyBotSelectMove(board) {
	const moves = _getLegalMoves(board)
	const randIdx = _getRandomInt(0, moves.length)
	if (!moves.length) return -1
	return moves[randIdx]
}

function mediumBotSelectMove(board) {
	const moves = _getLegalMoves(board)
	if (!moves.length) return -1
	for (let i = 0; i < moves.length; i++) {
		const winMove = _getBestMove(board, moves[i], 'O')
		const blockMove = _getBestMove(board, moves[i], 'X')
		if (winMove || blockMove || winMove === 0 || blockMove === 0) return winMove ?? blockMove
	}
	const randIdx = _getRandomInt(0, moves.length)
	return moves[randIdx]
}

function hardBotSelectMove(board) {
	const { move } = _minimax(board, true, 'O', 0)
	return move
}

function _minimax(board, isMax, shape, depth) {
	const winner = onCheckGameOver(board)
	const move = getLastMove()
	if (winner === 'O') return { move, value: 10 - depth, depth }
	else if (winner == 'X') return { move, value: depth - 10, depth }
	else if (_getLegalMoves(board).length === 9) return { move, value: 0, depth }

	const candidateChoices = []
	const candidates = _getLegalMoves(board)
	if (!candidates.length) return { move: 0, value: 0, depth: 0 }
	for (let i = 0; i < candidates.length; i++) {
		if (candidates.length === 8 && candidates.includes(4)) {
			candidateChoices.push({ move: 4, value: 10, depth: 0 })
			break
		}
		const currMove = candidates[i]
		const newBoard = JSON.parse(JSON.stringify(board))
		newBoard.splice(currMove, 1, shape)
		const otherShape = _getOppositeShape(shape)
		const result = _minimax(newBoard, !isMax, otherShape, depth + 1)
		result.move = currMove
		candidateChoices.push(result)
	}

	let maxChoice = null
	let maxValue = -100
	let minChoice = null
	let minValue = 100
	for (let i = 0; i < candidateChoices.length; i++) {
		const choice = candidateChoices[i]
		if (isMax && choice.value > maxValue) {
			maxChoice = choice
			maxValue = choice.value
		} else if (!isMax && choice.value < minValue) {
			minChoice = choice
			minValue = choice.value
		}
	}

	if (isMax) return maxChoice
	else return minChoice
}

function _getOppositeShape(shape) {
	return shape === 'X' ? 'O' : 'X'
}

function _getBestMove(board, currMove, shape) {
	const newBoard = JSON.parse(JSON.stringify(board))
	newBoard.splice(currMove, 1, shape)
	const winner = onCheckGameOver(newBoard)
	if (winner) return currMove
}

function _getLegalMoves(board) {
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
