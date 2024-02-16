// Menu Hamburger

const btn = document.querySelector('#toggle-btn');
const ul  = document.getElementById('ulref');

btn.onclick = ()=> ul.style.opacity == 0 ? ul.style.opacity = 1 : ul.style.opacity = 0;
   
    //  Carrousel
    const carrousel_content = document.querySelector('.images');
    const prev = document.getElementById('gauche');
    const next = document.getElementById('droite');
    let translate = 0;

    prev.onclick = ()=>{
        translate += 100;
        if(translate > 0)
            translate = 0;
        carrousel_content.style.transform = 'translateX(' + translate +'%)';
    }
    next.onclick = ()=>{
        translate -= 100;
        if(translate < -200)
            translate = -200;
        carrousel_content.style.transform = 'translateX(' + translate +'%)';
    }