let latitude = document.getElementById("latt");
let longitude = document.getElementById("long");

getliveLocation(latitude, longitude);

function getliveLocation(latitudeOut, longitudeOut){

    if(navigator.geolocation){
          let locationObj = window.navigator.geolocation;
            locationObj.watchPosition(function(position){
                    latitudeOut.innerHTML = position.coords.latitude;
                    longitudeOut.innerHTML = position.coords.longitude;
            }, function(error){
                    switch(error){
                        case error.PERMISSION_DENIED:  alert("User denied permission");
                                                       break;
                        case error.POSITION_UNAVAILABLE: alert("Position not available");
                                                       break;
                        case error.TIMEOUT:            alert("Timeout error");
                                                       break;
                        case error.UNKNOWN_ERROR:      alert("An unknown error occured");
                                                       break;
                    }
            });
    }else{
        alert("Your browser doesnot support GeoLocation");
    }
         
}