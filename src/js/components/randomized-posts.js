const postsURL = `${JSONServerURL}/posts`

const getPostsList = async() => {
    const postsJson = await fetch(postsURL)
    const postsList = await postsJson.json()
    return postsList
}

const main = async() => {
    const posts = await getPostsList()
    const resultsPosts = posts.sort(() => Math.random() - 0.5).slice(0, 9)

    let randomPostsListSpace = document.getElementById("randomized-posts")

    resultsPosts.forEach((post) => {
        let postDiv = document.createElement("div")
        postDiv.classList.add("post")

        let userInfoDiv = document.createElement("div")
        userInfoDiv.classList.add("user-info")
        let userDetailsDiv = document.createElement("div")
        userDetailsDiv.classList.add("user-details")
        let userName = document.createElement("a")
        userName.classList.add("user-name")
        userName.href = post.ongPageURL
        userName.textContent = post.ongName
        let postTime = document.createElement("p")
        postTime.classList.add("post-time")
        const time = new Date(Number(post.time))
        formattedTime = time.toLocaleDateString('pt-Br',{ dateStyle: 'long' })
        postTime.textContent = formattedTime
        userDetailsDiv.appendChild(userName)
        userDetailsDiv.appendChild(postTime)
        userInfoDiv.appendChild(userDetailsDiv)
        postDiv.appendChild(userInfoDiv)

        let postText = document.createElement("p")
        postText.classList.add("post-text")
        postText.textContent = post.text
        postDiv.appendChild(postText)
        
        let postImageContainer = document.createElement("div")
        postImageContainer.classList.add("post-image-container")
        let postImages = post.images
        postImages.forEach((image) =>{
            {
                let imageLinkElement = document.createElement("a")
                imageLinkElement.href = image.src //TODO: link to image page
                imageLinkElement.classList.add("post-image-link")
                let imageElement = document.createElement("img")
                imageElement.src = image.src
                imageElement.classList.add("post-image")
                imageLinkElement.appendChild(imageElement)
                postImageContainer.appendChild(imageLinkElement)
            }
        })
        postDiv.appendChild(postImageContainer)

        /*
        let postActionsDiv = document.createElement("div")
        postActionsDiv.classList.add("post-actions")
        let shareButton = document.createElement("button")
        let shareButtonIcon = document.createElement("i")
        shareButtonIcon.classList.add("fas")
        //let commentButton = document.createElement("button")
*/    
        randomPostsListSpace.appendChild(postDiv)
    }) 
}

main()

