const ongInfoForm = document.getElementById("create-ong-info")

const editOngPageAdress = "./ongpgedit.html"
const ongsURL = 'http://localhost:3001/ongs'
const accountsURL = 'http://localhost:3001/accounts'

ongInfoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log(ongInfoForm)

    const response = await fetch(ongsURL)
    const ongs = await response.json()

    const causes = ongInfoForm.causas
    const selectedCause = causes.options[causes.selectedIndex].text
    const newOngId = ongs.length + 1

    const ongInfo = {
        id: newOngId,
        title: ongInfoForm.ongname.value,
        cause: selectedCause,
        belongsToUser: Number(localStorage.getItem("user_id")),
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


    fetch(
        `${accountsURL}/${localStorage.getItem("user_id")}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({ong: newOngId}),
    })
    localStorage.setItem("ong_id", newOngId)
    location.replace(`${editOngPageAdress}?id=${newOngId}`);
})
