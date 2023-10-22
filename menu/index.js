var barIcon = document.querySelector('.fa-bars')
var mobile= document.querySelector(".mobile")
var xIcon = document.querySelector('.fa-x')


var show=false

barIcon.onclick=function(){

  if(show==false){
    mobile.style.transform='translateX(0)'
    show=true
  }
  xIcon.onclick=function(){
    mobile.style.transform='translateX(300%)'
    show=false
  }

}