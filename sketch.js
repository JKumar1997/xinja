function updateHead(color) {
	const gradientEndEl = document.querySelector('#gradientEnd');
	gradientEndEl.setAttribute('stop-color', `#${color}`);
}

function updateEyepiece(color) {
	const gradientEyepiece = document.querySelector('#gradientEndEye');
	gradientEyepiece.setAttribute('stop-color', `#${color}`);
}
     
function updateShadoweye(color) {
	const gradientShadow = document.querySelector('#gradientShadoweye');
	gradientShadow.setAttribute('stop-color', `#${color}`);
}
      
function updateShadow(color) {
	const updateShadowMain = document.querySelector('#mainshadow');
	updateShadowMain.setAttribute('stop-color', `#${color}`);
}

function updateEyes(color) {
   const updateEye = document.querySelector('#eye');
   updateEye.setAttribute('stop-color', `#${color}`);
}

function updateMouth(color) {
   const mouth = document.querySelector('#mouthgradienttop');
   mouth.setAttribute('stop-color', `#${color}`);
}

function updateMouthshadow(color) {
   const mouthshadow = document.querySelector('#mouthgradientbottom');
   mouthshadow.setAttribute('stop-color', `#${color}`);
}