const searchNavbarEngine = () =>{
    const searchNavbar = (objectData, input, flags,) => {

        const result = objectData.filter((ong)=>{
            if (flags.length > 0){
            return ong.title.toLowerCase().includes(input.toLowerCase()) && flags.includes(ong.cause)
            } else {
                return ong.title.toLowerCase().includes(input.toLowerCase())
            }
        })
    
        return result
    }

    const getFilters = () => {
        const checkboxes = document.querySelectorAll('#causes-list input[type="checkbox"]')
        const checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked)
        const filters = checkedBoxes.map(checkbox => checkbox.id)
        return filters
    }

const searchInput = document.getElementById("navbar-search-input")
const searchButton = document.getElementById("navbar-search-button")

searchButton.addEventListener("click", async() => {

const response = await fetch('https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app/ongs')

const ongs = await response.json()

console.log(ongs)

const filters = getFilters()
console.log(filters)
const results = searchNavbar(ongs, searchInput.value, filters)

if (results.length <= 0) {
    return alert("Nenhuma ONG encontrada")
}

const results_ids = results.map(result => result.id)

return window.location.replace(`./search-results.html?results=${JSON.stringify(results_ids)}`);
})
}

searchNavbarEngine()
