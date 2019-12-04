import $ from 'jquery';
import 'bootstrap';
import { run } from "./app/app";
import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
import SearchSat from "./js/models/SearchSat";
import SearchNews from "./js/models/SearchNews";
import SearchSingleNews from "./js/models/SearchSingleNews";
import Likes from "./js/models/Likes";
import * as satView from "./js/views/satView";
import * as planetView from "./js/views/planetView";
import * as newsView from "./js/views/newsView";
import * as singleNewsView from "./js/views/singleNewsView";
import * as likeView from "./js/views/likeView";
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
satView.clearResults();
renderLoader(elements.infoResults);

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


$(document).ready(function() {
    // Init Scrollspy
    $('body').scrollspy({ target: '#main-nav' });

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
})



document.addEventListener("DOMContentLoaded", () => {
getTime();
newsControl();
state.likes = new Likes();
state.likes.readStorage();
state.likes.likes.forEach(like => likeView.renderLike(like));
});


elements.searchResPages.addEventListener("click", (e) => {
const btn = e.target.closest(".btn-page");
if(btn) {
    const pageNum = parseInt(btn.dataset.goto, 10);
    newsView.clearPages();
    newsView.clearNews();
    newsView.renderNews(state.news.latestNews, pageNum);
}
})




const getSingleNews = async (id) => {

if(id) {
state.singleNews = new SearchSingleNews(id);

try {
await state.singleNews.getSingleNews();
singleNewsView.renderSingleNews(state.singleNews.newsRes, state.likes.isLiked(id));
}catch(err) {
console.log(err);
}
}
}


elements.newsContainer.addEventListener("click", (e) => {
e.preventDefault();
const id = e.target.parentNode.id;
getSingleNews(id);
})



const controlLikes = () => {
  if (!state.likes) state.likes = new Likes();
const id = state.singleNews.newsRes.news_id;

if(!state.likes.isLiked(id)) {
const like = state.likes.addLikes(id, state.singleNews.newsRes.name);
likeView.toggleLikeBtn(true);
likeView.renderLike(like);
} else {
state.likes.deleteLike(id);
likeView.toggleLikeBtn(false);
likeView.deleteLike(id);

}

likeView.toggleDiv(state.likes.getNumOfLikes());

}


elements.singleNews.addEventListener("click", (e) => {
if(e.target.matches(".like-btn, .like-btn *")) {
e.preventDefault();
controlLikes();
}
})

elements.likedDiv.addEventListener("click", (e) => {
if(e.target.closest(".likes__link")) {
e.preventDefault();
let id = e.target.parentNode.getAttribute("href");
id = id.replace("#", "");
getSingleNews(id);
}
})










   





