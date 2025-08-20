1. Guardamos el geojson del pais en "/data/pais.json" y el geojson de las provincias en "/data/provincias.json".
    Fuente GeoJson de provincias: https://infra.datos.gob.ar/georef/provincias.geojson
    Fuente GeoJson de pais (No lo utilizamos): https://www.ign.gob.ar/NuestrasActividades/InformacionGeoespacial/CapasSIG
2. Averiguamos las coordenadas decimales de argentina: -38.416097, -63.616672.
    Fuente: https://www.geodatos.net/coordenadas/argentina
3. Creamos un mapa básico con los datos obtenidos en los pasos 1 y 2. Utilizaremos leaflet.
    Fuente: https://leafletjs.com
4. Copiamos el svg que nos brinda leaflet y lo pegamos en nuestro proyecto principal "./index.html"
5. 