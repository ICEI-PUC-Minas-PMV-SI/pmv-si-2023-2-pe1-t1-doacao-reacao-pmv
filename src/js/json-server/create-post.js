const postsURL= 'http://localhost:3001/posts'

const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const post = document.getElementById(sendcomment);
    const today = new Date()

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
                text: post,
                time: today.getDate()
        }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
 location.replace(loggedOngPage);
    })