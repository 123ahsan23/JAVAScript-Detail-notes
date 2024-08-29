var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove" , function(dets){
    crsr.style.left = dets.x +30+ "px",
    crsr.style.top = dets.y- 10 + "px",
    blur.style.left = dets.x - 120+ "px",
    blur.style.top = dets.y - 120+ "px"
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })

    elem.addEventListener("mouseleave" , function(){
        crsr.style.scale = 1
        crsr.style.border = "0 solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"

    })
})


var footerTexts = document.querySelectorAll("#footer h3, #footer h4");
footerTexts.forEach(function(text) {
    text.addEventListener("mouseenter", function() {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });

    text.addEventListener("mouseleave", function() {
        crsr.style.transform = "scale(1)";
        crsr.style.border = "0 solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});


gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }

})


gsap.to("#main" , {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})


gsap.from("#about-us img,#about-us-in", {
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
       start: "top 60%",
       end: "top 58%",
       scrub: 3
        
    }
})


gsap.from("#colon1" , {
    y:-40,
    x: -40,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 47%",
        scrub: 2
    }
})


gsap.from("#colon2" , {
    y:40,
    x: 40,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 47%",
        scrub: 2
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub:3
    }

})