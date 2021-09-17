let gBoard = ['', '', '', '', '', '', '', '', '']
let gScore = { X: 0, O: 0 }

export { getBoard, getScore, onMarkCell, onCheckGameOver, onClearBoard }

function getBoard() {
	return gBoard
}

function getScore() {
	return gScore
}

function onMarkCell(idx, shape, board = gBoard) {
	board.splice(idx, 1, shape)
}

function onCheckGameOver(board) {
	if (!board.includes('')) {
		return 'tie'
	}
	if (
		(board[0] === board[1] && board[1] === board[2]) || // horizontal
		(board[0] === board[3] && board[3] === board[6]) // vertical
	) {
		return board[0]
	}
	if (
		(board[6] === board[7] && board[7] === board[8]) || // horizontal
		(board[2] === board[5] && board[5] === board[8]) // vertical
	) {
		return board[8]
	}
	if (
		(board[3] === board[4] && board[4] === board[5]) || // horizontal
		(board[1] === board[4] && board[4] === board[7]) || // vertical
		(board[0] === board[4] && board[4] === board[8]) || // diagonal
		(board[2] === board[4] && board[4] === board[6]) // diagonal
	) {
		return board[4]
	}
}

function onClearBoard() {
	for (let i = 0; i < gBoard.length; i++) {
		gBoard.splice(i, 1, '')
	}
}
