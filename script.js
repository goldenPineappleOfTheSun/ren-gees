let scene = 'first-scene'
let line = 1

function nextLine() {
	line += 1
	document.querySelectorAll('.line').forEach(x => x.style.display = 'none')
	document.querySelector(`.talk .${scene}.line-${line}`).style.display = 'block'
}

function changeScene(name) {

}

document.querySelector('body').addEventListener('click', () => {
	switch (scene + '-' + line) {
		case 'first-scene-1':
			nextLine() 
			break;
		case 'first-scene-2':
			nextLine() 
			break;
	}
})