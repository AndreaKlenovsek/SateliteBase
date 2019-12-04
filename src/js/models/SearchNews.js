import axios from "axios";

export default class SearchNews {
constructor() {
this.proxy = "https://cors-anywhere.herokuapp.com/";
}    

async getNews() {
try{
const res = await axios(`${this.proxy}http://hubblesite.org/api/v3/news`);
this.latestNews = res.data;

} catch(error) {
alert("Error");
}
}

}