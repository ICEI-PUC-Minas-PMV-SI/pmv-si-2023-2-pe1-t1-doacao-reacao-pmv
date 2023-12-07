const ongsURL = 'http://localhost:3001/ongs'


const buildOngAdress = (ong) => {
    return `${ong.location.street}, ${ong.location.number} - ${ong.location.neighborhood}. ${ong.location.city} - ${ong.location.uf}`   
}
const getResultsFromQueryParams = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      })
      return params.results
}

const getOngsList = async() => {
    const ongsJson = await fetch(ongsURL)
    const ongsList = await ongsJson.json()
    return ongsList
}

const main = async() => {
    const ongs = await getOngsList()

    const resultsIds = getResultsFromQueryParams()
    console.log(resultsIds)

    const resultsOngs = ongs.filter(ong => resultsIds.includes(ong.id))

    console.log(resultsOngs)

    let searchResultslist = document.getElementById("search-results")
    resultsOngs.forEach((ong) => {

        let searchResultDiv = document.createElement("div")
        searchResultDiv.classList.add("searchresult")

        const img = document.createElement("img")
        img.src = ong.profilePicture
        searchResultDiv.appendChild(img)

        let searchResultContentDiv = document.createElement("div")
        searchResultDiv.classList.add("searchresult-content")

        let a = document.createElement("a")
        a.href = `./ongpage.html?id=${ong.id}`
        const h2 = document.createElement("h2")
        h2.textContent = ong.title
        a.appendChild(h2)
        searchResultContentDiv.appendChild(a)
        
        const p1 = document.createElement("p")
        p1.classList.add("ongadress")
        p1.textContent = buildOngAdress(ong)
        searchResultContentDiv.appendChild(p1);
        
        
        const pElement2 = document.createElement("p")
        pElement2.textContent = ong.description
        searchResultContentDiv.appendChild(pElement2)

        searchResultDiv.appendChild(searchResultContentDiv)
    
        searchResultslist.appendChild(searchResultDiv)
        //TODO: adicionar imagem da ong
    }) 
}

main()
