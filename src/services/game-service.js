let gBoard = ['', '', '', '', '', '', '', '', '']
let gScore = {
	pvp: { X: 0, O: 0 },
	easy: { X: 0, O: 0 },
	medium: { X: 0, O: 0 },
	hard: { X: 0, O: 0 },
}
let gMoves = []

export { getBoard, getScore, getLastMove, onMarkCell, onCheckGameOver, onClearBoard }

function getBoard() {
	return gBoard
}

function getScore() {
	return gScore
}

function getLastMove() {
	return gMoves[gMoves.length - 1]
}

function onMarkCell(idx, shape, board = gBoard) {
	board.splice(idx, 1, shape)
	gMoves.push({ pos: idx, shape })
}

function onCheckGameOver(board) {
	if (!board.includes('')) {
		return 'tie'
	}
	if (
		(board[6] === board[7] && board[7] === board[8] && board[7]) || // horizontal
		(board[2] === board[5] && board[5] === board[8] && board[5]) // vertical
	) {
		return board[8]
	}
	if (
		(board[3] === board[4] && board[4] === board[5] && board[4]) || // horizontal
		(board[1] === board[4] && board[4] === board[7] && board[4]) || // vertical
		(board[0] === board[4] && board[4] === board[8] && board[4]) || // diagonal
		(board[2] === board[4] && board[4] === board[6] && board[4]) // diagonal
	) {
		return board[4]
	}
	if (
		(board[0] === board[1] && board[1] === board[2] && board[1]) || // horizontal
		(board[0] === board[3] && board[3] === board[6] && board[3]) // vertical
	) {
		return board[0]
	}
}

function onClearBoard() {
	for (let i = 0; i < gBoard.length; i++) {
		gBoard.splice(i, 1, '')
	}
}
