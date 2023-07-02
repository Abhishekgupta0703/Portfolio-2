// typing animation 
var typed = new Typed(".typing",{
    strings:[" ","Web Developer","Video Editor"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

const a=document.querySelectorAll(".action");
const sec=document.querySelectorAll("section");
function activeMenu(){
  let len=sec.length;
  while(--len && window.scrollY+97<sec[len].offsetTop){}
  a.forEach(ltx=>ltx.classList.remove("active"));
  a[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu )


const cursor= document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove",(e)=>{
  let x=e.pageX;
  let y = e.pageY;

  cursor.style.top= y+"px";
  cursor.style.left= x+"px";
  cursor.style.display="block";

  function mouseStopped(){
    cursor.style.display="none";
  }
  timeout =setTimeout(mouseStopped,1000);
});
document.addEventListener("mouseout",()=>{
  cursor.style.display="none";
})



// tilt effect
jQuery(document).ready(function ($) {
  $(".et-js-tilt").tilt({
    glare: true,
    maxGlare: 0.7,
    scale: 1.1,
    perspective: 300
  });

  $(".et-row-js-tilt").tilt({
    scale: 1,
    perspective: 1200
  });
});
