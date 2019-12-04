import axios from "axios";


export default class SearchSat {
constructor(id) {
this.id = id;
this.apiKey = "QSB4YS-JEF82R-2N2HPG-489Q"
this.proxy = "https://cors-anywhere.herokuapp.com/"
}

async satelite() {
try{
   
    const res = await axios(`${this.proxy}https://www.n2yo.com/rest/v1/satellite/positions/${this.id}/41.702/-76.014/0/1/&apiKey=${this.apiKey}`);
   this.info = res.data.info;
   this.lat = res.data.positions[0].satlatitude;
   this.long = res.data.positions[0].satlongitude;
} catch(err) {
    alert(error);
}
}


    
 

}




    
    