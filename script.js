function abreCaixaInteresses() {
	let x = document.getElementById('caixa-interesses-txt')
	if (x.style.display === 'none') {
		x.style.display = 'block'
	} else {
		x.style.display = 'none'
	}

	// test()
}

// function test() {
// 	let interesseTxt = document.getElementById('interesse-txt')
// 	let y = document.querySelectorAll('input[type=image]')
// 	for (var i = 0; i < y.length; i++) {
// 		// console.log(i, y[i])
// 		// let index = y[i]
// 		switch (i) {
// 			case 0:
// 				console.log(i)
// 				interesseTxt.innerHTML = 'mensagem 1'
// 				break
// 			case 1:
// 				console.log(i)
// 				interesseTxt.innerHTML = 'mensagem 2'
// 				// console.log(y[i])
// 				break
// 			case 2:
// 				console.log(i)

// 				interesseTxt.innerHTML = 'mensagem 3'
// 				// console.log(y[i])
// 				break
// 			default:
// 			// console.log(`Sorry.`)
// 		}
// 	}
// }
