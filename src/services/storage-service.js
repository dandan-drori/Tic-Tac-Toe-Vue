export const storageService = {
	getFromStorage,
	setInStorage,
}

function getFromStorage(key) {
	return JSON.parse(localStorage.getItem(key))
}

function setInStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}
