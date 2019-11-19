import {elements} from "../base";


export const getInput = () => elements.searchInput.value;

export const clearResults = () => {
elements.infoResults.innerHTML = "";
}

export const clearInput = () => {
elements.searchInput.value = "";
}

export const closeRes = () => {
elements.infoResults.innerHTML = "";
}


export const renderPlanets = (info, lat, long) => {

const html = `
<div class="row card-body">
          <div class="col-md-4 p-3" id="info__results">
          <p>NORAD ID: ${info.satid}</p>
          <p>Satelite Name: ${info.satname}</p>
          <p>Latitude: ${lat}</p>
          <p>Longitute: ${long}</p>
          </div>
          <div class="col-md-4" id="map"></div>
          <div class="col-md-4" id="map">
          <button class="btn btn-reload"><i class="fas fa-redo"></i>
          </button>
          <button class="btn btn-close"><i class="far fa-times-circle"></i></button>
          </div>

`    
elements.infoResults.insertAdjacentHTML("afterbegin", html);
}


export const map = (lat, long, name) => {
L.mapquest.key = "iY0hxrvESNaGDca3d8Ay0gGBnGfY0XA8";

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map("map", {
      center: [lat, long],
      layers: L.mapquest.tileLayer("map"),
      zoom: 0
});

L.mapquest.textMarker([lat, long], {
    text: `${name}`,
    subtext: 'Current satelite position',
    position: 'right',
    type: 'marker',
    icon: {
      primaryColor: '#333333',
      secondaryColor: '#333333',
      size: 'sm'
    }
  }).addTo(map);

}