import {elements} from "../base";
import "../../scss/assets/_loader.scss";

export const renderLoader = (insertLocation) => {
const loader = `
<div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
`
insertLocation.insertAdjacentHTML('afterbegin', loader);
}


export const removeLoader = () => {
const loader = document.querySelector(".spinner");

if(loader){
loader.remove();
}
}
