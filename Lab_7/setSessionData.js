const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
          let title = route.title;
          let latMax = route.lat_max;
          let latMin = route.lat_min;
          let lonMax = route.lon_max;
          let lonMin = route.lon_min;
          let nothing = "Nothing Set!";

          sessionStorage.setItem("title", title);
          sessionStorage.setItem("lat_max", latMax);
          sessionStorage.setItem("lat_min", latMin);
          sessionStorage.setItem("lon_max", lonMax);
          sessionStorage.setItem("lon_min", lonMin);
        // YOUR CODE HERE
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
        sessionStorage.setItem("title", nothing);
        sessionStorage.setItem("lat_max", nothing);
        sessionStorage.setItem("lat_min", nothing);
        sessionStorage.setItem("lon_max", nothing);
        sessionStorage.setItem("lon_min", nothing);
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("title", nothing);
    sessionStorage.setItem("lat_max", nothing);
    sessionStorage.setItem("lat_min", nothing);
    sessionStorage.setItem("lon_max", nothing);
    sessionStorage.setItem("lon_min", nothing);
  }
}
