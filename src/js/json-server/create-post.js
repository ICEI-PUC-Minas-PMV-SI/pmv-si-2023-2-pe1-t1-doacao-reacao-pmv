const post = document.getElementById(sendcomment)
const accountsURL= 'http://localhost:3001/accounts/${id}'



post.addEventListener("submit", async (e) => {
    e.preventDefault();

    const post = document.getElementById(sendcomment);


 fetch(
    accountsURL,
    {
    headers: {
        'Content-Type': 'application/json'
    },
        method: 'POST',
        body: JSON.stringify({
            posts:[{
                postId: posts.lenght + 1,
                belongsTo: ${id}, 
                text: post,
          }]
        }),
        }).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))
 location.replace(loggedOngPage);
    })