const ongpageURL= 'http://localhost:3001/ongpage'
const accountsURL= 'http://localhost:3001/accounts/${i}'



post.addEventListener("submit", async (e) => {
    e.preventDefault();

    const onginfo = document.getElementById(onginfo);


 fetch(
    postsURL,
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
                belongsTo: 'FILLER'
        }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
 location.replace(loggedOngPage);
    })