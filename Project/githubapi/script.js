// const img = document.querySelector(".card-img-top");
const button = document.querySelector('#button')
const title = document.querySelector('.card-title')
const text = document.querySelector('.card-text')
const div = document.querySelector('.card')
const img = document.createElement('img')
button.addEventListener('click',function(e){
    // e.preventDefault();
    console.log("here")
    img.setAttribute('src',data.avatar_url)
    div.prepend(img)
    title.innerHTML = data.login
    text.innerHTML = "public_repos: 14"
})
const url = "https://api.github.com/users/Gautam-Adhikari";
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
let data;
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState==4){
        data = JSON.parse(this.responseText);
        console.log(data.avatar_url)
    }
}
xhr.send()