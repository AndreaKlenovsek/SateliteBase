import { elements } from "../base";

export const renderSingleNews = (el, isLiked) => {
console.log(el.thumbnail)
const icon = isLiked ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'

const markup = `
<div>
<h3 class="text-primary py-2">${el.name}</h3>
<img class="thumbnail" src=${`https://${el.thumbnail}`}>
<p>Mission: ${el.mission}</p>
<p>Publication: ${shortenPublication(el.publication)}</p>
<p class="py-2">Abstract: ${el.abstract.substring(0, 400)}...</p>
<div class="buttons">
<a href="${el.url}" target="_blank" class="btn btn-primary my-2">Read Article</a>
<a href="#" class="like-btn btn-heart-outlined">${icon}</a>
</div>
</div>
`
elements.singleNews.innerHTML = markup;
}


const shortenPublication = el => {

const char = el.indexOf("T");
const element = el.slice(0 , char);
return element;
}