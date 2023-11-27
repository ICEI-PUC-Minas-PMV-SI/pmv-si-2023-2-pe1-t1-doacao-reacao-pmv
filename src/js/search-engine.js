const ongsPath = 'https://localhost:3001/ongs'

const filterObjectByFlags = (objectData, flags) => {
    const filteredData = objectData.some((ong)=>{
        flags.includes(ong.causa)
    })
    return filteredData;
}

const search = (objectData, flags,) => {

    const result = objectData.filter((ong)=>{
        if (flags.length > 0){
        return ong.title.toLowerCase().includes(input.toLowerCase()) && filterObjectByFlags(objectData, flags)
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

const filters = getCheckedCheckboxes()

const ongsData = fetch()



