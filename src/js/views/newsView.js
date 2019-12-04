import {elements} from "../base";

const displayNews = el =>{

const html = `<a href="#" class="news-elemnent my-2" id=${el.news_id}>
<h3>${el.name}</h3>
</a>`;


elements.newsContainer.insertAdjacentHTML("afterbegin", html);
}


export const clearPages = () => {
elements.searchResPages.innerHTML = "";
}

export const clearNews = () => {
elements.newsContainer.innerHTML = "";
}


const createBtn = (page, type) => `
<button class="btn btn-page btn--${type}" data-goto=${type === "prev" ? page - 1 : page + 1 }>
<span>Page ${type === "prev" ? page - 1 : page + 1 }</span>
</button>
`;




const renderPages = (page, res, resPerPage) => {
const pages = Math.ceil(res / resPerPage);

let pageBtn;

if(page === 1 && pages > 1){
pageBtn = createBtn(page, "next");
} else if(page <pages) {
pageBtn = `
${createBtn(page, "prev")}
${createBtn(page, "next")}
`
} else if(page === pages && pages > 1) {
pageBtn = createBtn(page, "prev");
}


elements.searchResPages.insertAdjacentHTML("afterbegin", pageBtn);
 
}



export const renderNews = (news, page=1, resPerPage=5) => {
const start = (page - 1) * resPerPage;
const end = page * resPerPage;
if(news) {

const latestNews =  news.slice(start, end).map(displayNews).join("");
console.log(latestNews)
renderPages(page, news.length, resPerPage);
}
}