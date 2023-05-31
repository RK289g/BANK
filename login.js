//add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: Get the email addresss from input-field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    //step-3: get password
    const passwprdField = document.getElementById('user-password');
    const password = passwprdField.value;
    //console.log(email, password);

    //step-4: verify email & password [DONOT do this is client page....we're doing it for study purpose]
    if (email == 'rksaju80@gmail.com' && password == 'rksaju') {
        //console.log('valid user')
        window.location.href = 'bank.html'

    } else {
        alert('Email and password yiu have are not correct');
    }
})