const JSONServerURL = 'http://localhost:3001'
const ongsURL = `${JSONServerURL}/ongs`
const postsURL = `${JSONServerURL}/posts`

const ongPage = "./ongpage.html"

const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const today = new Date()

    const postsResponse = await fetch(postsURL)
    const posts = await postsResponse.json()

    const postingOngId = Number(localStorage.getItem("ong_id"))
    const ongResponse = await fetch(`${ongsURL}/${postingOngId}`)
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
                ongPageURL: `./ongpage.html?ong_id=${postingOngId}`,
                ongName: ong.title,
                text: postForm.post.value,
                time: today.getTime(),
                comments: null,
            }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
    location.replace(`${ongPage}?id=${postingOngId}`);
})