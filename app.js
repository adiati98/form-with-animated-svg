const form = document.querySelector('#form');
const glasses = document.querySelector('#glasses');
const hair = document.querySelector('#hair');
const handHold = document.querySelector('#hand-hold');
const head = document.querySelector('#head')

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const showPassword = document.querySelector('#show');
const submitBtn = document.querySelector('#submit-btn');

// toggle password

const showOrHidePassword = () => {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
}

showPassword.addEventListener('change', showOrHidePassword);

// move hand down
const handDown = () => {
	handHold.classList.add('hand-down');
};

// hair waving
const hairMove = () => {
	hair.classList.add('hair-wave');
};

// glasses down
const glassesDown = () => {
	glasses.classList.add('glasses-down');
};

// closing face
const closeFace = () => {
  handHold.classList.add('close-face')
}

// face down
const faceDown = () => {
  head.classList.add('head-down')
}

// reset handDown & glassesDown
const reset = () => {
	handHold.classList.remove('hand-down');
	glasses.classList.remove('glasses-down');
};

// reset hiding head movement
const resetHead = () => {
  handHold.classList.remove('close-face');
  head.classList.remove('head-down');
}

// reset all animation
const resetAll = () => {
	if(document.activeElement !== email && document.activeElement !== password && !showPassword.checked) {
    reset()
    resetHead()
    hair.classList.remove('hair-wave')
  }
};

const animate = () => {
	if (document.activeElement === email) {
    resetHead();
		handDown();
		hairMove();
		glassesDown();
	} else if (document.activeElement === password && !showPassword.checked) {
		reset();
    hairMove();
    closeFace();
    faceDown();
	} else if (showPassword.checked) {
    resetHead();
    glassesDown();
    hairMove()
	} else {
		resetAll();
	}
};

setInterval(() => {
	animate();
}, 10);
