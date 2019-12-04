import {elements} from "../base";


export const toggleLikeBtn = isLiked => {
const iconString = isLiked ? "fas fa-heart" : "far fa-heart"; 
document.querySelector(".like-btn i").className = iconString;
}


export const toggleDiv = (likes) => {
elements.likedDiv.style.display = likes > 0 ? "block" : "none";
}



export const renderLike = like => {
    const markup = `
    <li>
    <a class="likes__link" href="#${like.id}">
            <p class="likes__author">${like.name}</p>
        </div>
    </a>
    </li>  
    `
    
elements.likedDiv.insertAdjacentHTML("beforeend", markup);
};


export const deleteLike = id => {
const el = document.querySelector(`.likes__link[href="#${id}"]`);
        
if(el) {
 el.parentElement.removeChild(el);
}
}