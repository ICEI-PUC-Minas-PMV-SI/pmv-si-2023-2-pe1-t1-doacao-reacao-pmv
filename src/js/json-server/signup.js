const signupForm = document.getElementById("signup-form")
const mailErrorMsg = document.getElementById("mail-error-msg")

const loggedOngPage = "./home-logged.html"
const JSONServerURL = 'https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app'
const accountsURL = `${JSONServerURL}/accounts`

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const response = await fetch(accountsURL)
    const accounts = await response.json()

    const foundUser = accounts.find(account => account.mail === email)

    if (foundUser) {
        return mailErrorMsg.style.opacity = 1;
    }

    const password = signupForm.senha.value;
    const confirmPassword = signupForm.confirmarSenha.value;

    if (password !== confirmPassword) {
        return passwordErrorMsg.style.opacity = 1;
    }

    const firstName = signupForm.firstname.value;
    const lastName = signupForm.lastname.value;
    fetch(
        accountsURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id: accounts.length + 1,
                mail: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                ongpage: null,
            }),
        })
        .then(postResponse => {
            localStorage.setItem("user_id", accounts.length)
            postResponse.json()
        })
        .then(postResponse => console.log(postResponse))
    location.replace(loggedOngPage);
})