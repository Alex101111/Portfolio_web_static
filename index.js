
let NAV = document.querySelectorAll("section");
let S = [-210,-120,-27,77,200];
let Hightlight = document.querySelector(".Highlight");

function where(){
for(j=0 ; j<NAV.length;j++){
   if (NAV[j].getBoundingClientRect().bottom>0&&NAV[j].getBoundingClientRect().top<window.innerHeight){
      Activate(Hightlight);
      Hightlight.style.transform = 'translateX(' + S[j] + '%)'
   }
}
}
document.addEventListener('scroll',where);
/*console.log('gimme')
let header = document.querySelector('header')
let nav = document.querySelector('header nav')
let burger = document.querySelector('#burger')
navElement = document.querySelectorAll('nav a')
body=document.querySelector('body')
burger.addEventListener('click',navBar)
bool = true
function navBar(){

    if(bool){
    nav.style.display='grid'
   header.classList.add('headerJs')
   

    nav.classList.add('navJs')
    body.classList.add('bodyJs')
  
    bool=false
    
}else{
    nav.style.display='none'
    nav.classList.remove('navJs')
    body.classList.remove('bodyJs')
    header.classList.remove('headerJs')
    bool=true
    console.log('hoooo')
}

}


const mq = window.matchMedia('(min-width: 768px)')
mq.addListener(mediaQueryCheck)
function mediaQueryCheck(x) {
    if (x.matches) {
        nav.style.display='block'
        burger.style.display='none'
        nav.classList.remove('navJs')
        body.classList.remove('bodyJs')
     
    }else{
        burger.style.display='flex'
        nav.style.display='none'
   }
}
*/.

function  Activate (element) {element.classList.add('active');}
function  Deactivate (element) {element.classList.remove('active');}


let BurgerButton = document.querySelector('#BurgerIcon');
let BurgerMenu = document.querySelector('#BurgerMenu');
let MAIN = document.querySelector('.MAIN');

function A() {
   if (BurgerMenu.classList.contains('active')){
      Deactivate(BurgerMenu); Deactivate(BurgerButton);
   }
   else {
         Activate(BurgerMenu); Activate(BurgerButton);
   }
}
BurgerButton.addEventListener('click',A);

function B() {
   if (BurgerMenu.classList.contains('active')){ 
      Deactivate(BurgerMenu); Deactivate(BurgerButton);
   }
}

MAIN.addEventListener('click',B);


//------------------------------------------------------Creating Scroll Animations -------------------------------------------------------//

/*
const media = window.matchMedia('(min-width: 768px)')
media.addListener(mediaQueryCheck)
function mediaQueryCheck(y){
if (y.matches) {


    function revealMyIntrests(){
 
   
        photoText =document.querySelectorAll('.photoText');
        photoAbout = document.querySelector("#photoAbout")
     
        
        
        for(j=0;j<photoText.length;j++){
        
          var windowHight = window.innerHeight;
          var ditanceToviewPort = photoText[j].getBoundingClientRect().top;
          var elementHeight = 400;
        
          if(ditanceToviewPort<windowHight-elementHeight){
        
           photoText[j].classList.add('active')
           
        
          }else{
           photoText[j].classList.remove('active')
     
          }
        }
        
        }
        
        window.addEventListener("scroll",revealMyIntrests)

   }

}
*/

function IsVisible (element){
   var Is;
   let Distances = element.getBoundingClientRect();
   (Distances.top>0 && Distances.bottom<window.innerHeight)? Is=true : Is=false;
   return Is;
}


var ROLLERS =document.querySelectorAll('.ROLLER');

function ROLL(){
   for (j=0 ; j<ROLLERS.length;j++)IsVisible(ROLLERS[j])? Activate(ROLLERS[j]) : Deactivate(ROLLERS[j]); 
}  
    window.addEventListener("scroll",ROLL);

 
 
 //-----------------------------------------------Creating slide for intrests -------------------------------------------------------------------//
 
 let photos = document.querySelectorAll('.photo')
 let myIntrests = document.querySelector('.myIntrestsPhotos')
 let intrestsBtnR = document.querySelector('#buttonRight')
 let intrestsBtnL = document.querySelector('#buttonLeft')
 let intrestsText = document.querySelectorAll(".intrestsText  p")
 
 IntrestsCount = 0
 
 function changeImg() {

    if (IntrestsCount > photos.length - 1) {
       IntrestsCount = 0
    }
    if (IntrestsCount < 0) {
       IntrestsCount = photos.length - 1
    }
    if (window.innerWidth < 768) {
    swipe = 'translateX(' + IntrestsCount * -400 + 'px)'
    }
    else{
    swipe = 'translateX(' + IntrestsCount * -400 + 'px)'
    }
    myIntrests.style.transform = swipe
 }
 
 
 for (i = 0; i < intrestsText.length; i++) {
 
    intrestsText[i].classList.add("intrestTextJs2")
 
    intrestsText[0].classList.remove("intrestTextJs2")
 }
 
 function changeIntrestsText() {
 
 
    for (i = 0; i < intrestsText.length + 1; i++) {
 
       intrestsText[IntrestsCount].classList.remove("intrestTextJs2")
 
       intrestsText[i].classList.add("intrestTextJs2")
 
    }
 }
 
 intrestsBtnR.addEventListener('click', swipeRight)
 
 
 function swipeRight() {
    IntrestsCount++
    changeImg()
    changeIntrestsText()
 }
 
 intrestsBtnL.addEventListener('click', swipeLeft)
 
 function swipeLeft() {
    IntrestsCount--
    changeImg()
    changeIntrestsText()
 }
 
 
 /*-----------------------------------------------------End Of About Me Page -------------------------------------------------------------*/


    /*
    for(i=0;i<skillIcons.length;i++){
    for(j=0;j<skillPoints.length;j++){
       var windowHight = window.innerHeight;
       var distanceToViewPort = skillIcons[i].getBoundingClientRect().top
       var distancePointsToViewPort = skillPoints[i].getBoundingClientRect().top
       var elementHeight = 400;

       if (window.innerWidth < 768) {
        if(distanceToViewPort<1000 ){
     
          
            skillIcons[i].classList.add('roll')
            skillText[i].classList.add('rollText')
      
      
         }else{
            skillIcons[i].classList.remove('roll')
            skillText[i].classList.remove('rollText')
         
         }
         if( distancePointsToViewPort<1000 ){
            skillPoints[j].classList.add('points')
         }else{
            skillPoints[j].classList.remove('points')
         }
      }else{
    
    if(distanceToViewPort<windowHight-elementHeight ){
     
          
          skillIcons[i].classList.add('roll')
          skillText[i].classList.add('rollText')
    
    
       }else{
          skillIcons[i].classList.remove('roll')
          skillText[i].classList.remove('rollText')
       
       }
       if( distancePointsToViewPort<windowHight-elementHeight ){
          skillPoints[j].classList.add('points')
       }else{
          skillPoints[j].classList.remove('points')
       }
    }
    } 
    }*/