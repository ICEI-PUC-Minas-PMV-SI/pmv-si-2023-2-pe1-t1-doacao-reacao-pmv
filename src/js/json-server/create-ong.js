const ongInfoForm = document.getElementById("create-ong-info")

const editOngPageAdress = "./ongpgedit.html"
const ongsURL = 'http://localhost:3001/ongs'

ongInfoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log(ongInfoForm)

    const response = await fetch(ongsURL)
    const ongs = await response.json()

    const causes = ongInfoForm.causas
    const selectedCause = causes.options[causes.selectedIndex].text

    console.log(ongInfoForm.ongname.value)

    const ongInfo = {
        id: ongs.length + 1,
        title: ongInfoForm.ongname.value,
        cause: selectedCause,
        belongsToUser: localStorage.getItem("user_id"),
        location: {
            city: ongInfoForm["locality-input"].value,
            uf: ongInfoForm["administrative_area_level_1-input"].value,
            neighborhood: ongInfoForm.bairro.value,
            street: ongInfoForm["location-input"].value,
            number: ongInfoForm.numero.value,
            position: null,
        },
    }

    fetch(
        ongsURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(ongInfo),
        })
        .then(postResponse => {
            localStorage.setItem("user_id", accounts.length)
            postResponse.json()
        })
        .then(postResponse => console.log(postResponse))

        //ATUALIZAR DADOS DO USUÁRIO
        //ATUALIZAR ONG ATUAL NO LOCAL STORAGE

    location.replace(editOngPageAdress);
})