const loginForm = document.getElementById("login-form")
const mailErrorMsg = document.getElementById("mail-error-msg")
const passwordErrorMsg = document.getElementById("password-error-msg")

const JSONServerURL = 'https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app'
const accountsURL = `${JSONServerURL}/accounts`
const loggedPage = './home-logged.html'

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
        localStorage.setItem("user_id", foundUser.id)
        localStorage.setItem("ong_id", foundUser.ong)
       window.location.replace(loggedPage);
    }
})