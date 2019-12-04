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
    <div class="col-md-8 align-self-center ">
    <h3 class="text-primary">Mercury</h3>
    <p class="p-2">Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System.</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`;
    break;
    case ("02"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img02} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Venus</h3>
    <p>The second planet from the sun, Venus is Earth's twin in size. Radar images beneath its atmosphere reveal that its surface has various mountains and volcanoes. But beyond that, the two planets couldn't be more different. Because of its thick, toxic atmosphere that's made of sulfuric acid clouds, Venus is an extreme example of the greenhouse effect. It's scorching-hot, even hotter than Mercury. The average temperature on Venus' surface is 900 F (465 C). </p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("03"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img03} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Earth</h3>
    <p>The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life. Earth's atmosphere is rich in nitrogen and oxygen. Earth's surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second).</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("04"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img04} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Mars</h3>
    <p>The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue. Mars shares similarities with Earth: It is rocky, has mountains, valleys and canyons, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms. </p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("05"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img05} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Jupiter</h3>
    <p>The fifth planet from the sun, Jupiter is a giant gas world that is the most massive planet in our solar system — more than twice as massive as all the other planets combined, according to NASA. Its swirling clouds are colorful due to different types of trace gases. And a major feature in its swirling clouds is the Great Red Spot, a giant storm more than 10,000 miles wide. It has raged at more than 400 mph for the last 150 years, at least. Jupiter has a strong magnetic field, and with 75 moons, it looks a bit like a miniature solar system.</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("06"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img06} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Saturn</h3>
    <p>The sixth planet from the sun, Saturn is known most for its rings. When polymath Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts: a planet and two large moons on either side. Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery. More than 40 years later, Christiaan Huygens proposed that they were rings. The rings are made of ice and rock and scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium and has numerous moons.</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("07"):
    info = `<div class="card-body row">
    <div class="col-md-4 align-self-center"><img src=${img07} height="300" width="300" alt=""></div>
    <div class="col-md-8 align-self-center">
    <h3 class="text-primary">Uranus</h3>
    <p>The seventh planet from the sun, Uranus is an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus. But unlike Venus or any other planet, its equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers believe an object twice the size of Earth collided with Uranus roughly 4 billion years ago, causing Uranus to tilt. That tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years at a time. The collision is also thought to have knocked rock and ice into Uranus' orbit. These later became some of the planet's 27 moons. Methane in the atmosphere gives Uranus its blue-green tint. It also has 13 sets of faint rings. </p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    case ("08"):
    info = `<div class="card-body row">
    <div class="col-md-6 align-self-center"><img src=${img08} height="300" width="300" alt=""></div>
    <div class="col-md-6 align-self-center">
    <h3 class="text-primary">Neptune</h3>
    <p>The eighth planet from the sun, Neptune is about the size of Uranus and is known for supersonic strong winds. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. Neptune was the first planet predicted to exist by using math, before it was visually detected. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest some other planet might be exerting a gravitational tug. German astronomer Johann Galle used calculations to help find Neptune in a telescope. Neptune is about 17 times as massive as Earth and has a rocky core.</p>
    </div>
    <button class="btn btn-primary btn-close-rounded">X</button>
    <div>`
    break; 
    }
    
    
    elements.planetResults.innerHTML = info;
    }