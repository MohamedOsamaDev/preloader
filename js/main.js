//perloader

var loader = document.querySelector('.preloader');

    
    window.addEventListener("load", function(){
       setTimeout(() => {
        
           loader.style.display = 'none'
       }, 4000);
    });


const text = document.querySelector('.secend');
const textLoad = () => {
    setTimeout(()=> {
        text.textContent = "Mohamed"
        },0);
setTimeout(()=> {
text.textContent = "a web developer"
},4000);
}
textLoad();
setInterval(textLoad, 8000);

let back = document.querySelector('.back');
let menuo = document.querySelector('.menu-mobile');
let btn = document.querySelector('.btn');
let nav = document.getElementById('btn');
let aboutMm = document.querySelector('.about-me');
let boxLeft = document.querySelector('.box-left')
let ulinfo = document.querySelector('.ulinfo');
let layerblur = document.querySelector('.layerblur');
let boxright = document.querySelector('.box-right');
let cards = document.querySelector('.cards');
let mood = 'ok';
let moodpointer = 'small';
let mainTile = document.querySelector('.aboutjs');
//Experinece-section
let Experience = document.querySelector('.Experience');
let experiencejs = document.querySelector('.experiencejs');
//eduction-section
let Education = document.querySelector('.Education');
let Educationjs = document.querySelector('.Educationjs');
//clints
let clintsSection = document.querySelector('.clints') ;
let clintsjs = document.querySelector('.clintsjs')
//skills-section
let skills = document.querySelector('.skills');
let skillsjs = document.querySelector('.skillsjs');
//works section
let workesection = document.querySelector('.works');
let worksjs = document.querySelector('.worksjs');
// contact-info 
let contactsction = document.querySelector('.contactsction');
let middlejs = document.querySelector('.middle');
// cotnact form 
let contactform = document.querySelector('.discount');
let contactjs = document.querySelector('.overlay');

//start functions
window.onscroll =()=> {
//  Animate navbar Scrolling
    if(scrollY >= 100 && mood == 'ok')
{
    nav.classList.add("activenav");
 }
 else{
    nav.classList.remove("activenav");  
}
//  Animate Scrolling 
if (window.scrollY >= aboutMm.offsetTop -400) {
    boxLeft.classList.add("animte") ;
    mainTile.classList.add("main-tile-animtation");
}
if (window.scrollY >= boxright.offsetTop -400) {
   layerblur.classList.add("layerunblur");
   ulinfo.classList.add("animte");
};
if (window.scrollY >= Experience.offsetTop -400) {
    experiencejs.classList.add("main-tile-animtation");
 };
 if (window.scrollY >= Education.offsetTop -400) {
    Educationjs.classList.add("main-tile-animtation");
 };
 if (window.scrollY >= skills.offsetTop -400) {
    skillsjs.classList.add("main-tile-animtation");
 };
 if (window.scrollY >= workesection.offsetTop -400) {
    worksjs.classList.add("main-tile-animtation");
 };
 if (window.scrollY >= clintsSection.offsetTop -400) {
    clintsjs.classList.add("main-tile-animtation");
 };
 if (window.scrollY >= contactsction.offsetTop -400) {
    middlejs.classList.add("main-tile-animtation");
 };
 if (window.scrollY >= contactform.offsetTop -400) {
    contactjs.classList.add("animtionoverlay");
 };


/*
if (window.scrollY = cards.offsetTop -1000) {

 }
*/
};

btn.onclick = ()=> {
   mood = 'notok'
    menuo.style.right ='0%';
    nav.classList.remove("activenav");
if (menuo.style.right ='0%') {
    btn.style.display ='none';
    back.style.display ='inline';
}
};
back.onclick = ()=> {
    mood = 'ok'
    menuo.style.right ='-107%';
    btn.style.display ='inline';
    back.style.display ='none';
    if (scrollY > 100) {
        nav.classList.add("activenav");
    }
};
//custom cursor
// start all class active for large cursor
let activecursor = document.querySelector(".activecursor");

// End all class active for large cursor
let cursorc = document.getElementById("cursor");
let cursor = document.querySelectorAll(".cursor");
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.forEach(el => {
    if (moodpointer === 'large') {
        el.style.left = `${x - 25}px`;
        el.style.top = `${y - 15}px`;
    }else {
        el.style.left = `${x - 10}px`;
        el.style.top = `${y -8}px`;
    }
  })
});
//custem curser
activecursor.onmouseover =() => {
    moodpointer = 'large'
    cursorc.classList.add("cursorenter");
};
activecursor.onmouseleave =() => {
    moodpointer = 'small'
    cursorc.classList.remove("cursorenter");
};
ulinfo.onmouseover =() => {
    moodpointer = 'large'
    cursorc.classList.add("cursorenter");
};
ulinfo.onmouseleave =() => {
    moodpointer = 'small'
    cursorc.classList.remove("cursorenter");
};
let cursorbox1 = document.querySelector('.cursorbox1');

cursorbox1.onmouseover =() => {
    moodpointer = 'large'
    cursorc.classList.add("cursorenter");
};
cursorbox1.onmouseleave =() => {
    moodpointer = 'small'
    cursorc.classList.remove("cursorenter");
};


    
        

        
            
          
        
