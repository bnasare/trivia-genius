// window.addEventListener('scroll', function () {
//     var header = document.querySelector('.header');
//     var quiz = document.querySelector('.quiz');
//     var headerHeight = header.offsetHeight;

//     quiz.style.marginTop = headerHeight + 'px';
// });

const loginButton = document.getElementById('loginButton');

function redirectToQuiz() {
    window.history.replaceState({}, '', '/quiz.html');
    window.location.href = '/quiz.html';
}

loginButton.addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get username and password from input fields
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        console.log('Attempting to redirect...');
        redirectToQuiz();
    } else {
        alert('Login failed!');
    }

    usernameInput.value = '';
    passwordInput.value = '';
});




