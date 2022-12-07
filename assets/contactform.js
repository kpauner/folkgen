// Form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

const usernameSuccess = document.getElementById('name-error');
const emailSuccess = document.getElementById('email-error');
const messageSuccess = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
	e.preventDefault()

	validateInput();
})

function validateInput(){
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();

	if (usernameValue === ''){
		usernameSuccess.classList.add('error');
	} else {
		usernameSuccess.classList.remove('error');
	}
	if (emailValue === ''){
		emailSuccess.classList.add('error');
	} else {
		emailSuccess.classList.remove('error');
	}
	if (messageValue === ''){
		messageSuccess.classList.add('error');
	} else {
		messageSuccess.classList.remove('error');
	}
}