const JSONServerURL = 'http://localhost:3001'
const ongsURL = `${JSONServerURL}/ongs`

const search = (objectData, input, flags,) => {

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

const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

searchButton.addEventListener("click", async() => {

const response = await fetch(ongsURL)

const ongs = await response.json()

console.log(ongs)

const filters = getFilters()
console.log(filters)
const results = search(ongs, searchInput.value, filters)

if (results.length <= 0) {
    return alert("Nenhuma ONG encontrada")
}

const results_ids = results.map(result => result.id)

return window.location.replace(`./search-results.html?results=${JSON.stringify(results_ids)}`);
})


