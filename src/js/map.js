const mapProperties = {
    center: { //TODO precisa ser localização do cliente
        lat: -19.919157028198242,
        lng: -43.93867874145508,
    },
    zoom: 14,
    map_id: "DEMO_MAP_ID",
}

//TODO const heartIcon = './assets/heart-icon.png';
const JSONServerURL = process.env.JSON_SERVER_URL || 'http://localhost:3001'
const ongsURL = `${JSONServerURL}/ongs`
let map
async function initMap() {
    map = new google.maps.Map(document.getElementById('ongs-map'), mapProperties);
    const ongs = (await fetch(ongsURL)).json()
    Promise.resolve(ongs)
        .then(
            ongs => {
                ongs.forEach(ong => {
                    const [lat, lng] = ong.location.position.split(',');
                    const marker = new google.maps.Marker({
                        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
                        title: ong.title,
                        map: map,
                        // TODO icon: heartIcon,
                    });
                    marker.addListener('click', function () {
                        window.open(`./ongpage.html?ongid=${ong.id}`, '_blank');
                    });
                })
            }
        )
}

window.initMap = initMap;
