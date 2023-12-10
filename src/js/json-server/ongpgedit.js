const onginfo = document.getElementById("onginfo");

onginfo.addEventListener("submit", async (e) => {
    e.preventDefault();
    const JSONServerURL = 'http://localhost:3001'
    const ongpageURL = `${JSONServerURL}/ongpages`
    const ongPage = './ongpage.html'

    let OngpageExists = false;
    const response = await fetch(`${JSONServerURL}/ongpages/${localStorage.getItem("ong_id")}`)
    const ongpage = await response.json()
    OngpageExists = Boolean(ongpage.id)

    if (OngpageExists) {
        const requestBody = Object.keys(onginfo).forEach(key => {
            if (onginfo[key].value === null || onginfo[key].value === undefined || onginfo[key].value === "") {
              delete onginfo[key];
            }
          })
        fetch(
            `${JSONServerURL}/ongpages/${localStorage.getItem("ong_id")}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify(
                    requestBody
                ),
            })
            .then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
       //window.location.replace(`${ongPage}/?ongid=${localStorage.getItem("ong_id")}`);
    } else {
        e.preventDefault();
        fetch(
            ongpageURL,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    ongname: onginfo.ongname.value,
                    heading1: onginfo.heading1.value,
                    heading2: onginfo.heading2.value,
                    heading3: onginfo.heading3.value,
                    bio1: onginfo.bio1.value,
                    bio2: onginfo.bio2.value,
                    bio3: onginfo.bio3.value,
                    bio4: onginfo.bio4.value,
                    donationinfo: onginfo.donationinfo.value,
                    belongsTo: 4,
                    img1: onginfo.banner1.value,
                    img2: onginfo.square1.value,
                    img3: onginfo.square2.value,
                    img4: onginfo.square3.value,
                    img5: onginfo.banner2.value,
                    img6: onginfo.banner3.value
                }),
            })
            .then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
    }
    //window.location.replace(`${ongPage}?ongid=${localStorage.getItem("ong_id")}`);
})