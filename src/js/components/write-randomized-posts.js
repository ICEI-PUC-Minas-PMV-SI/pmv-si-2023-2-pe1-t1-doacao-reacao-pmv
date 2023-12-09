const JSONServerURL = 'http://localhost:3001'
const postsURL = `${JSONServerURL}/posts`

const getOngsList = async() => {
    const postsJson = await fetch(postsURL)
    const postsList = await postsJson.json()
    return postsList
}

const main = async() => {
    const posts = await getPostsList()
    const resultsOngs = ongs.filter(ong => resultsIds.includes(ong.id))

    let randomPostsListSpace = document.getElementById("randomized-posts")

    resultsOngs.forEach((post) => {

        let postDiv = document.createElemsent("div")
        postDiv.classList.add("post")

        let userInfoDiv = document.createElement("div")
        postDiv.classList.add("user-info")
        let userName = document.createElement("a")
        userName.classList.add("user-name")
        userName.href = post.ongPageURL
        userName.textContent = post.ongName
        let postTime = document.createElement("p")
        postTime.classList.add("post-time")
        const time = new Date(Number(post.time))
        formattedTime = time.toLocaleDateString('pt-Br',{ dateStyle: 'long' })
        postTime.textContent = formattedTime
        userInfoDiv.appendChild(userName)
        userInfoDiv.appendChild(postTime)
        postDiv.appendChild(userInfoDiv)

        let postText = document.createElement("div")
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
        searchResultDiv.appendChild(searchResultContentDiv)
    
        randomPostsListSpace.appendChild()
    }) 
}

main()

