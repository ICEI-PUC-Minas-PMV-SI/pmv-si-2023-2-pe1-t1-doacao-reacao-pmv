


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
    const ongsJson = await fetch(' https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app/ongs')
    const ongsList = await ongsJson.json()
    return ongsList
}

// o código que segue foi baseado na referência [6] do trabalho
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

        /* const img = document.createElement("img")
        img.src = ong.profilePicture
        searchResultDiv.appendChild(img) */

        let searchResultContentDiv = document.createElement("div")
        searchResultDiv.classList.add("searchresult-content")

        let a = document.createElement("a")
        a.href = `./ongpage.html?ongid=${ong.id}`
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
    }) 
}

main()

