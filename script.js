let men = document.querySelector('.men');
let img1= document.querySelector(".men-section-items");
men.onmouseover = ()=>{
    img1.classList.remove('visible');
}
men.onmouseout = ()=>{
    img1.classList.add('visible');
}

let women = document.querySelector('.women');
let img2= document.querySelector(".women-section-items");
women.onmouseover = ()=>{
    img2.classList.remove('visible');
}
women.onmouseout = ()=>{
    img2.classList.add('visible');
}

let kids = document.querySelector('.kids');
let img3= document.querySelector(".kids-section-items");
kids.onmouseover = ()=>{
    img3.classList.remove('visible');
}
kids.onmouseout = ()=>{
    img3.classList.add('visible');
}

let home = document.querySelector('.homeandliving');
let img4= document.querySelector(".house-section-items");
home.onmouseover = ()=>{
    img4.classList.remove('visible');
}
home.onmouseout = ()=>{
    img4.classList.add('visible');
}

let beauty = document.querySelector('.beauty');
let img5= document.querySelector(".beauty-section-items");
beauty.onmouseover = ()=>{
    img5.classList.remove('visible');
}
beauty.onmouseout = ()=>{
    img5.classList.add('visible');
}

let studio = document.querySelector('.studio');
let img6= document.querySelector(".studio-section-items");
studio.onmouseover = ()=>{
    img6.classList.remove('visible');
}
studio.onmouseout = ()=>{
    img6.classList.add('visible');
}
