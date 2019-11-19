import { elements } from "../base";

export const renderSingleNews = (el) => {
// console.log(el.newsRes.name);
const markup = `
<div>
<h3 class="text-primary py-2">${el.name}</h3>
<p>Mission: ${el.mission}</p>
<p>Publication: ${el.publication}</p>
<p class="py-2">Abstract: ${el.abstract.substring(0, 400)}...</p>
<a href="${el.url}" target="_blank" class="btn btn-primary my-2">Read Article</a>
</div>
`
elements.singleNews.innerHTML = markup;
}