import {elements} from "../base";
import img01 from "../../assets/Mercury2.png";
import img02 from "../../assets/Venus2.png";
import img03 from "../../assets/Earth2.png";
import img04 from "../../assets/Mars2.png";
import img05 from "../../assets/Jupiter2.png";
import img06 from "../../assets/Saturn2.png";
import img07 from "../../assets/Uranus2.png";
import img08 from "../../assets/Neptune2.png";



export const closePlanetRes = () => {
    elements.planetResults.innerHTML = "";
    }
    



export function planetInfo(e) {
e.preventDefault();
    let info;
    const id = this.id;
    
    switch(id){
    case("01"):
    info = `<div class="card-body row p-3">
    <div class="col-md-4 align-self-center"><img src=${img01} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Mercury</h3>
    <p class="p-2">Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`;
    break;
    case ("02"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img02} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Venus</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("03"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img03} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Earth</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("04"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img04} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Mars</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("05"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img05} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Jupiter</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("06"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img06} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Saturn</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("07"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img07} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Uranus</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("08"):
    info = `<div class="card-body row">
    <div class="col-md-6 align-self-center"><img src=${img08} height="300" width="300" alt=""></div>
    <div class="col-md-6 align-self-center">
    <h3 class="text-primary">Neptune</h3>
    <p>Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    }
    
    
    elements.planetResults.innerHTML = info;
    }