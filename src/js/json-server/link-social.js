const accountsURL= 'http://localhost:3001/accounts/${id}'






onginfo.addEventListener("submit", async (e) => {
    e.preventDefault();


    const ongName = onginfo.ongname.value;
    const ongCausa = onginfo.causas.value;
    const ongLocation = onginfo.local.value

    console.log({
        id: ongs.length + 1,
        title: ongName,
        description: ongCausa,
        author: accountsURL.firstName.value,
        location: ongLocation
    })
    fetch(
        accountsURL,
        {
        headers: {
            'Content-Type': 'application/json'
        },
            method: 'POST',
            body: JSON.stringify({
                 "id": ongs.length + 1,
                 "title": ongName,
                 "description": "Somos uma ONG focada em " + ongCausa,
                 "author": accountsURL.firstName.value,
                 "profilePicture": "https://picsum.photos/200/300",
                 "location": {
                     "city": "Belo Horizonte",
                     "uf": "MG",
                     "neighborhood": "Savassi",
                     "street": ongLocation,
                     "number": "0",
                     "position": "-19.919157028198242,-43.93867874145508"
            }),
            }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
    location.replace(loggedOngPage);
        })