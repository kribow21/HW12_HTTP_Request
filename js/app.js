let sendBtn = document.getElementById('send');
function addAPost(){
    var postInput = document.getElementById('userPost').value;
    var titleInput = document.getElementById('userTitle').value;
    axios.request({
        method : "POST",
        url : "https://jsonplaceholder.typicode.com/posts",
        headers :{
            "Content-Type" : "application/json; charset=UTF-8"
        },
        data : {
            title : titleInput,
            body : postInput,
            userId : 22
        }
    }).then(newPost).catch(failure);
}
sendBtn.addEventListener("click", addAPost);
function newPost(response){
    console.log(response);
    successAlert = document.getElementById('successM').innerText="Post recieved";
}
function failure(error){
    console.error(error);
}

let editBtn = document.getElementById('editor');
function editPost(){
    postInput = document.getElementById('userPost').value;
    titleInput = document.getElementById('userTitle').value;
    axios.request({
        method : "PATCH",
        url : "https://jsonplaceholder.typicode.com/posts/1",
        headers :{
        "Content-Type" : "application/json; charset=UTF-8"
        },
        data : {
            title : titleInput,
            body : postInput,
            userId : 22
        }
    }).then(editedPost).catch(failure);
}
editBtn.addEventListener("click", editPost);

function editedPost(response){
    console.log(response);
    console.log("you've successfully edited your post");
}
let xBtn = document.getElementById('deleted');
function goAway(){
    postInput = document.getElementById('userPost').value;
    titleInput = document.getElementById('userTitle').value;
    axios.request({
        method : "DELETE",
        url : "https://jsonplaceholder.typicode.com/posts/1",
        headers :{
        "Content-Type" : "application/json; charset=UTF-8"
        },
        data : {
            title : titleInput,
            body : postInput,
            userId : 22
        }
    }).then(makeGoAway).catch(failure);
}

xBtn.addEventListener("click", goAway);

function makeGoAway(response){
    console.log(response);
    console.log("you've successfully deleted your post");
}

function seeAll(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(postAll).catch(failure);
}
function postAll(response){
    console.log(response);
    console.log("Posted all posts");
    postInput = document.getElementById('userPost').value;
    titleInput = document.getElementById('userTitle').value;

for (let i =0; i < response.data.length; i++){
    let newElement = document.createElement('p')
    newElement.innerHTML = response.data[i].body;
    let parentElement = document.getElementById('container');
    parentElement.append(newElement);
}
}
window.addEventListener("load", seeAll);