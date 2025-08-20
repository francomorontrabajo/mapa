const latArg = -38.416097
const lonArg = -63.616672
const mapZoom = 4

map = L.map('map').setView([latArg, lonArg], mapZoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch("../data/provincias.json")
    .then((res) => res.json())
    .then((geojson) => {
        L.geoJSON(geojson, {
            style: function (feature) {
                return { color: feature.properties.color };
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.description) {
                    layer.bindPopup(feature.properties.description);
                }
            }
        }).addTo(map);
    })
    .catch((error) => {
        console.error("Error al cargar el GeoJSON:", error);
    });