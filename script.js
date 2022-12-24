function abreCaixaInteresses() {
	let x = document.getElementById('caixa-interesses-txt')
	if (x.style.display === 'block') {
		x.style.display = 'none'
	} else {
		x.style.display = 'block'
	}
}

function caixaAnime() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intAnime = document.getElementsByClassName('interesse-anime')
	if (intAnime) interesseTxt.innerHTML = 'anime!'
}

function caixaBook() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intBook = document.getElementsByClassName('interesse-books')
	if (intBook) interesseTxt.innerHTML = 'teste!'
}

function caixaFilm() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intFilm = document.getElementsByClassName('interesse-film')
	if (intFilm) interesseTxt.innerHTML = 'filme!'
}

function caixaTV() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intTV = document.getElementsByClassName('interesse-tv')
	if (intTV) interesseTxt.innerHTML = 'tv!'
}

function caixaGames() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intGames = document.getElementsByClassName('interesse-games')
	if (intGames) interesseTxt.innerHTML = 'games!'
}

function caixaCat() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intCat = document.getElementsByClassName('interesse-cat')
	if (intCat) interesseTxt.innerHTML = 'cat!'
}

function caixaNature() {
	abreCaixaInteresses()
	let interesseTxt = document.getElementById('interesse-txt')
	const intNature = document.getElementsByClassName('interesse-nature')
	if (intNature) interesseTxt.innerHTML = 'nature!'
}
