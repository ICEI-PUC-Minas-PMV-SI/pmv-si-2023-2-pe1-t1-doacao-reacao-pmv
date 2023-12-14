const mapProperties = {
    center: { //precisaria ser localização do cliente numa versão live
        lat: -19.919157028198242,
        lng: -43.93867874145508,
    },
    zoom: 14,
    map_id: "DEMO_MAP_ID",
}

let map
async function initMap() {
    map = new google.maps.Map(document.getElementById('ongs-map'), mapProperties);
    const ongs = (await fetch('https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app/ongs')).json()
    Promise.resolve(ongs)
        .then(
            ongs => {
                ongs.forEach(ong => {
                    if (ong.location && ong.location !== null && ong.location.position !== null){
                    console.log (ong.location.position)
                    const [lat, lng] = ong.location.position.split(',');
                    const marker = new google.maps.Marker({
                        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
                        title: ong.title,
                        map: map,
                    });
                    marker.addListener('click', function () {
                        window.open(`./ongpage.html?ongid=${ong.id}`, '_blank');
                    });
                }
                })
            }
        )
}

window.initMap = initMap;
