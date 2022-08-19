const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const contenter = document.getElementById('contenter');

signUpButton.addEventListener('click', () => {
	contenter.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	contenter.classList.remove("right-panel-active");
});