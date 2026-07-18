
window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach((el)=>{

let top=el.getBoundingClientRect().top;

if(top < window.innerHeight-100){
el.classList.add("active");
}

});

});