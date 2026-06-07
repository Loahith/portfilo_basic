// static/script.js

const roles = [
"Full Stack Developer",
"Python Developer",
"Java Programmer",
"AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

function type() {

const typing = document.getElementById("typing");

if(charIndex < roles[roleIndex].length){

typing.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}
else{

setTimeout(erase,1500);

}

}

function erase(){

const typing = document.getElementById("typing");

if(typing.textContent.length > 0){

typing.textContent =
typing.textContent.slice(0,-1);

setTimeout(erase,50);

}
else{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

charIndex = 0;

setTimeout(type,300);

}

}

type();

document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const response =
document.getElementById("response");

const res = await fetch("/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

message:
document.getElementById("message").value

})

});

const data = await res.json();

response.innerHTML = data.message;

this.reset();

});