const post = document.getElementById(sendcomment)
const postsURL= 'http://localhost:3001/posts'



post.addEventListener("submit", async (e) => {
    e.preventDefault();

    const post = document.getElementById(sendcomment);


 fetch(
    postsURL,
    {
    headers: {
        'Content-Type': 'application/json'
    },
        method: 'POST',
        body: JSON.stringify({
                postId: posts.length + 1,
                belongsTo: 'FILLER',
                text: post
        }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
 location.replace(loggedOngPage);
    })