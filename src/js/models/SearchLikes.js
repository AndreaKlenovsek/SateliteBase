import axios from "axios";

export default class SearchLikes {
    constructor(id) {
    this.proxy = "https://cors-anywhere.herokuapp.com/";
    this.id = id;
    }    
    
    async getSingleNews() {
    try{
    const res = await axios(`${this.proxy}http://hubblesite.org/api/v3/news_release/${this.id}`);
    this.newsRes = res.data;
//    console.log(this.newsName)

    
    } catch(error) {
    alert("Error getting news");
    }
    }
    
    
    }