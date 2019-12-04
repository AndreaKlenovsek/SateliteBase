export default class Likes {
    constructor() {
    this.likes = [];
    }



addLikes(id, name) {
const item = {
id,
name,
}
        
        
this.likes.push(item);
        
// Persist data to LS
this.persistData();
     
return item;
}



deleteLike(id) {
const indexId = this.likes.findIndex(item => item.id === id);
this.likes.splice(indexId, 1);
            
// PERSIST DATA 
this.persistData();         
}

getNumOfLikes() {
return this.likes.length;
}
            
            
isLiked(id) {
return this.likes.findIndex(like => like.id === id) !== -1;
}
           
            
            
persistData() {
localStorage.setItem("likes", JSON.stringify(this.likes));      
}
            
readStorage() {
const storage = JSON.parse(localStorage.getItem("likes"));  
if(storage) this.likes = storage;
}      
}
    