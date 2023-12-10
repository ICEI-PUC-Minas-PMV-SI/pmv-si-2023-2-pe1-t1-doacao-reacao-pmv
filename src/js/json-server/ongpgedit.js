const JSONServerURL = 'http://localhost:3001'
const ongpageURL = `${JSONServerURL}/ongpages`
const loggedOngPage = './ongpage.html?ongid=4'
const rppg = ongpages.length

const onginfo = document.getElementById("onginfo");

onginfo.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("SALVE");
    console.log(onginfo)

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
                belongsTo: 4
            }),
        })
        .then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
        location.replace(`${loggedOngPage}/?id=${rppg}`);
})