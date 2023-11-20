const fetchElement = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

class OngsMap extends HTMLElement {
    mapProperties = {
        center:{
            lat: -19.919157028198242,
            lng: -43.93867874145508,
        },
        zoom: 20,
        map_id: "DEMO_MAP_ID",
    };


    constructor() {
        super();
        this.markersContent = [];
    }

    makeSingleMarker(item) {
        const marker = document.createElement('gmp-advanced-marker');
        const [lat, lng] = item.location.position.split(',');
        marker.position = { lat: parseFloat(lat), lng: parseFloat(lng) };
        marker.title = item.title; 
        return marker;
    }

    makeMap() {
        const map = document.createElement('gmp-map');
        map.center = this.mapProperties.center;
        map.zoom = this.mapProperties.zoom;
        map.mapId = this.mapProperties.map_id;

        console.log(this.markersContent)
        this.markersContent.forEach((ong) => {
            map.appendChild(this.makeSingleMarker(ong));
        });
        console.log(map)
        this.appendChild(map)
    }

    async connectedCallback() {
        try {
            this.markersContent = await fetchElement('http://localhost:3001/ongs');
            this.makeMap();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

window.customElements.define('ongs-map', OngsMap);
