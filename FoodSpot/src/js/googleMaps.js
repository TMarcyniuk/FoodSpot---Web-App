let placesService;
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

    placesService = new google.maps.places.PlacesService(map);

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

                marker.map = null;

            }

            marker = new google.maps.marker.AdvancedMarkerElement({

                map,

                position: lugar.geometry.location,

                title: lugar.formatted_address

            });

        }
    );

    let markers = [];

export function buscarRestaurantes(texto){

    const request = {

        query: texto,

        fields:[
            "name",
            "geometry",
            "formatted_address",
            "rating"
        ]

    };

    placesService.findPlaceFromQuery(
        request,
        (results,status)=>{

            if(
                status !== google.maps.places.PlacesServiceStatus.OK
            ){
                return;
            }

            limpiarMarcadores();

            const bounds =
                new google.maps.LatLngBounds();

            results.forEach((place)=>{

                if(!place.geometry) return;

                const marker =
                    new google.maps.marker.AdvancedMarkerElement({

                        map,

                        position:
                            place.geometry.location,

                        title:
                            place.name

                    });

                markers.push(marker);

                bounds.extend(
                    place.geometry.location
                );

            });

            map.fitBounds(bounds);

        }
    );

    }

    function limpiarMarcadores(){

    markers.forEach(marker=>{

        marker.map=null;

    });

    markers=[];

}
}