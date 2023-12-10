const JSONServerURL = 'https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app'
const ongpageURL = `${JSONServerURL}/ongpages`
const ongPage = './ongpage.html'

const onginfo = document.getElementById("onginfo");

onginfo.addEventListener("submit", async (e) => {
    
    e.preventDefault();
    console.log("SALVE");
    console.log(onginfo)

    const sleep = (ms) => {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

    fetch(
        ongpageURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id: localStorage.getItem("ong_id"),
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
        sleep(1000).then(() => {
        location.replace(`${ongPage}?ongid=${localStorage.getItem("ong_id")}`);
        })
})