const filterObjectByFlags = (objectData, flags) => {
    const filteredData = objectData.some((ong)=>{
        flags.includes(ong.causa)
    })
    return filteredData;
}

const search = (event, objectData, flags, setReturnedData) => {
    event.preventDefault();

    const input = event.target.value.toLowerCase();

    const result = objectData.filter((ong)=>{
        if (flags.length > 0){
        return ong.title.toLowerCase().includes(input.toLowerCase()) && filterObjectByFlags(objectData, flags)
        } else {
            return ong.title.toLowerCase().includes(input.toLowerCase())
        }
    })
}

let data = fetch

