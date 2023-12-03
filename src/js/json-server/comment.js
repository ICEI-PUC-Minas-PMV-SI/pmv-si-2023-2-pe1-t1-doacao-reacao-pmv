const commentsURL= 'http://localhost:3001/comments/${id}'



post.addEventListener("submit", async (e) => {
    e.preventDefault();

    const comment = document.getElementById(comentario);


 fetch(
    commentsURL,
    {
    headers: {
        'Content-Type': 'application/json'
    },
        method: 'POST',
        body: JSON.stringify({
            "id": commentsURL.length + 1,
            "body": comment,
            "postId": 1
        }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
 location.replace(loggedOngPage);
    })