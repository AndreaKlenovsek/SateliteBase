import 'bootstrap';


import { run } from "./app/app";
import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
// const alertService = new AlertService();
// const componentService = new ComponentService();
// run(alertService, componentService);
import SearchSat from "./js/models/SearchSat";
import SearchLocation from "./js/models/SearchLocation";
import SearchNews from "./js/models/SearchNews";
import SearchLikes from "./js/models/SearchLikes";
import * as satView from "./js/views/satView";
import * as planetView from "./js/views/planetView";
import * as newsView from "./js/views/newsView";
import * as singleNewsView from "./js/views/singleNewsView";
import {elements} from "./js/base";
import {renderLoader, removeLoader} from "./js/views/loader";


const state = {};


const controlSearch = async () => {
// Extract input
state.query = satView.getInput();
if(state.query) {
// Create new object
state.satelites = new SearchSat(state.query);

// Prepare UI
// satView.clearInput();
satView.clearResults();
renderLoader(elements.infoResults);
// Clear existing input


try{
// Search for planets
await state.satelites.satelite();
// Prepare UI
removeLoader()
// Render planet info
satView.renderPlanets(state.satelites.info, state.satelites.lat, state.satelites.long);
// Render location on a map
satView.map(state.satelites.lat, state.satelites.long, state.satelites.info.satname);

}catch(err) {
alert(err);
}
}
}



// Refresh satelite data
elements.searchBtn.addEventListener("click", (e) => {
e.preventDefault();
controlSearch();

})

// Handle satelite buttons
elements.infoResults.addEventListener("click", (e) => {

if(e.target.matches(".btn-reload, .btn-reload *")) {
controlSearch();       
}  
if(e.target.matches(".btn-liked, .btn-liked *")) {
searchLikes = new Likes();   
} 
if(e.target.matches(".btn-close, .btn-close *")) {
satView.closeRes();
satView.clearInput();
} 

})

// Close planet info
elements.planetResults.addEventListener("click", (e) => {
if(e.target.matches(".btn-close-rounded, .btn-close-rounded *")) {
planetView.closePlanetRes();
}
})



// Get planet info
document.querySelectorAll(".planets__objects .object").forEach(object => {
object.addEventListener("click", planetView.planetInfo);
})



const getTime = () => {
const timeInput = elements.getTime;
const yearInput = elements.getYear;

const years = new Date().getFullYear();

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
minutes = checkTime(minutes);
seconds = checkTime(seconds);

timeInput.textContent = `${hours} : ${minutes} : ${seconds}`;
yearInput.textContent = years;

const time = setTimeout(function(){ getTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


const newsControl = async () => {
state.news = new SearchNews();

try {
await state.news.getNews();
newsView.renderNews(state.news.latestNews);

} catch(error) {
console.log(error);
}
}

const initScrollSpy = () => {
    // Init Scrollspy
    // $('body').scrollspy({ target: '#main-nav' });

    // Smooth Scrolling
    $("#main-nav a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
      }
    });
}

window.onload = function() {
    initScrollSpy();
  }

document.addEventListener("DOMContentLoaded", () => {

getTime();
newsControl();

});


elements.searchResPages.addEventListener("click", (e) => {
const btn = e.target.closest(".btn-page");
if(btn) {
    const pageNum = parseInt(e.target.parentNode.dataset.goto, 10);
    newsView.clearPages();
    newsView.clearNews();
    newsView.renderNews(state.news.latestNews, pageNum);
}
})




const controlLikes = async (el) => {

const id = el.id;
console.log(id);
if(id) {

state.singleNews = new SearchLikes(id);

await state.singleNews.getSingleNews();
console.log(state.singleNews.newsRes);

singleNewsView.renderSingleNews(state.singleNews.newsRes);

}
}


elements.newsContainer.addEventListener("click", (e) => {
e.preventDefault();
const el = e.target.parentNode;
controlLikes(el);



})










   





