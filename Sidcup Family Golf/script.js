const cursur = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursur.style.left = dets.x + 30 + "px";
    cursur.style.top = dets.y + 30 + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
})

const h4all = document.querySelectorAll(".navbar h4");
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
        cursur.style.scale = 3 ;
        cursur.style.border = "0.1px solid #fff";
        cursur.style.backgroundColor = "transparent";
   })
   elem.addEventListener("mouseleave",function(){
    cursur.style.scale = 1 ;
    cursur.style.border = "0px solid #95C11E";
    cursur.style.backgroundColor = "#95C11E";
})
})


gsap.to(".navbar",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from(".about-us img,.about-us-in",{
      y:90,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".about-us",
        scroll:"body",
        // markers:true,
        scrub:2,
        start:"top 60%",
        end:"top 55%",
      }
})
gsap.from(".card",{
      scale:0.8,
      opacity:0,
      duration:1,
      stagger:0.1,
      scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        scrub:1,
        start:"top 70%",
        end:"top 65%",
      }
})
gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        scroller:"body",
        trigger:".colon1",
        scrub:4,
        // markers:true,
        start:"top 55%",
        end:"top 45%",
    }
})
gsap.from(".colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colon2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:4,
    }
})
gsap.from(".page4 h1",{
     y:50,
     scrollTrigger:{
        scroller:"body",
        trigger:".page4 h1",
        scrub:2,
        // markers:true,
        start:"top 95%",
        end:"top 92%",
     }
})