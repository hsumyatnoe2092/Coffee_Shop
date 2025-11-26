
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
const passwordField = document.getElementById('passwordField');
const showIcon = document.getElementById('showIcon');
const hideIcon = document.getElementById('hideIcon');

showIcon.addEventListener('click', () => {
    passwordField.type = 'text';
    showIcon.style.display = 'none';
    hideIcon.style.display = 'inline-block';
});

hideIcon.addEventListener('click', () => {
    passwordField.type = 'password';
    hideIcon.style.display = 'none';
    showIcon.style.display = 'inline-block';
});

const PasswordField = document.getElementById('PasswordField');
const ShowIcon = document.getElementById('ShowIcon');
const HideIcon = document.getElementById('HideIcon');

ShowIcon.addEventListener('click', () => {
    PasswordField.type = 'text';
    ShowIcon.style.display = 'none';
    HideIcon.style.display = 'inline-block';
});

HideIcon.addEventListener('click', () => {
    PasswordField.type = 'password';
    HideIcon.style.display = 'none';
    ShowIcon.style.display = 'inline-block';
});


const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('passwordField');
const passwordRequirements = document.getElementById('passwordRequirements');

registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate username
    if (/^[\w\s]{3,20}$/.test(username)) {
        // Username is valid

        // Validate email
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            // Email is valid

            // Validate password
            const lengthRequirement = password.length >= 8;
            const uppercaseRequirement = /[A-Z]/.test(password);
            const specialCharacterRequirement = /[!@#$%^&*]/.test(password);

            if (lengthRequirement && uppercaseRequirement && specialCharacterRequirement ) {
                // Password is valid

                // Create a new user object
                const newUser = {
                    username,
                    email,
                    password,
                    isLoggedIn: false // New user is not logged in by default
                };

                // Retrieve existing users array from local storage
                const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

                // Add the new user to the array
                const updatedUsers = [...existingUsers, newUser];

                // Save the updated array back to local storage
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                alert('Registration successful! You can now log in!');
                location.href = '#loginForm';//link the homePage 
            } else {
                alert(' Password must contain at least 1 uppercase letter and 1 special character and at least 8 characters');
                return;
            }

        } else {
            alert('Please! Enter email. eg.user@gmail.com');
            return;
        }

    } else {
        alert('Please! Enter username.Username must start with a letter and can only contain letters and numbers.');
        return;
    }
});
const loginForm = document.getElementById('loginForm');
        
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const username1 = document.getElementById('username1').value;
            const password1 = document.getElementById('PasswordField').value;
            
            // Retrieve users array from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Find the user with matching username and password
            const loggedInUser = users.find(user => user.username === username1 && user.password === password1);
            
            if (loggedInUser) {
                // Mark the user as logged in
                loggedInUser.isLoggedIn = true;
                
                // Update the user data in the array
                localStorage.setItem('users', JSON.stringify(users));
                
                alert('Login successful!');
                // Redirect to home page after successful login
                location.href = '../AfterLoginSignup/home.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });


