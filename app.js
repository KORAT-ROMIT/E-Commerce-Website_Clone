// home page -> nav-bar //

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}


// shop page-> sproduct page //         // or ek bat ki shop page par jo pehle char "pro" class ke jo div he usko click karne se dure page par jayenge to jo vo he vo uska "javascript"  he vo uski line me hi likh dala he means inline me javascript likh dali he.//

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src
}















