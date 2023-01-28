const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const emailId = document.querySelector('.email-id');
const password = document.querySelector('.password');
const signUpBtn = document.querySelector('.sign-up-btn');

// const signUpData = {
//     'first name' : firstName.value,
//     'last name' : lastName.value,
//     'emailId' : emailId.value,
//     'password' : password.value,
// }

signUpBtn.addEventListener('click', () => {
    
    const signUpData = {
        'first name' : firstName.value,
        'last name' : lastName.value,
        'emailId' : emailId.value,
        'password' : password.value,
    }

})
