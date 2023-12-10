const main = async() => {

    const getResultsFromQueryParams = () => {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          })
          return params.ongid
    }

    const getPostsList = async() => {
        const postsJson = await fetch("https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app/posts")
        const postsList = await postsJson.json()
        return postsList
    }

    const postingOngId = Number(getResultsFromQueryParams())

    const posts = await getPostsList()
    const resultsPosts = posts.filter(post => post.belongsTo === postingOngId )


    if (resultsPosts.length <= 0){
        return null
    }


    let postsListSpace = document.getElementById("ong-posts")

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
        postsListSpace.appendChild(postDiv)
    }) 
}

main()

