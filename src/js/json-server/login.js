    const loginForm = document.getElementById("login-form")
const mailErrorMsg = document.getElementById("mail-error-msg")
const passwordErrorMsg = document.getElementById("password-error-msg")

const loggedOngPage = "./home-logged.html"
const accountsURL= 'http://localhost:3001/accounts'

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userMail = loginForm.email.value;
    const password = loginForm.senha.value;

    console.log(userMail, password)

    const response = await fetch(accountsURL)
    const accounts = await response.json()

    console.log(accounts)
    
    const foundUser = accounts.find(account => account.mail === userMail)

    console.log(foundUser)

    if (!foundUser){
        mailErrorMsg.style.opacity = 1;
    }else if (foundUser.password !== password) {
        passwordErrorMsg.style.opacity = 1;
    } else {
        location.replace(loggedOngPage);
    }
})