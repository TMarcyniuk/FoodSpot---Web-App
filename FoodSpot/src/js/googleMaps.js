let map;
let marker;
let geocoder;

export function initGoogleMap() {

    map = new google.maps.Map(

        document.getElementById("map"),

        {

            center: {
                lat: -34.6037,
                lng: -58.3816
            },

            zoom: 13,

            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false

        }

    );

    geocoder = new google.maps.Geocoder();

}

export function buscarDireccion(direccion) {

    geocoder.geocode(

        {

            address: direccion

        },

        (results, status) => {

            if (status !== "OK") {

                alert("No se encontró la ubicación.");

                return;

            }

            const lugar = results[0];

            map.setCenter(lugar.geometry.location);

            map.setZoom(16);

            if (marker) {

                marker.setMap(null);

            }

            marker = new google.maps.Marker({

                map: map,

                position: lugar.geometry.location,

                title: lugar.formatted_address

            });

        }

    );

}