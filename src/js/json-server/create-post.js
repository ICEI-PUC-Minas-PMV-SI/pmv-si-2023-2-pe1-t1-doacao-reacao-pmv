const postsURL = `${JSONServerURL}/posts`

const ongPage = "./ongpage.html"

const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const today = new Date()

    const postsResponse = await fetch(postsURL)
    const posts = await postsResponse.json()

    const postingOngId = Number(localStorage.getItem("ong_id"))
    const ongResponse = await fetch(`${' https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app/ongs'}/${postingOngId}`)
    const ong = await ongResponse.json()

    console.log(ong.name)

    fetch(
        postsURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                postId: posts.length + 1,
                belongsTo: postingOngId,
                ongPageURL: `./ongpage.html?ongid=${postingOngId}`,
                ongName: ong.title,
                text: postForm.post.value,
                time: today.getTime(),
                comments: null,
            }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
   window.location.replace(`${ongPage}?id=${postingOngId}`);
})