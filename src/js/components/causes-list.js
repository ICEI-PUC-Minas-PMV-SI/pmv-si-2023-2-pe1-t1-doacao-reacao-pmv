
const causesList = async() => {
    const ongsResponse = await fetch(' https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app/ongs')
    const ongs = await ongsResponse.json()
    const uniqueCauses = [...new Set(ongs.filter(ong => Boolean(ong.cause)).map(ong => ong.cause))]
    return Array.from(uniqueCauses)
}

const main = async() => {
    const causes = await causesList()
    var causasList = document.getElementById("causes-list");

    causes.forEach(function(cause) {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = cause;

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(" " + cause));

        causasList.appendChild(li);
    })
}

main()