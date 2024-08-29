
var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove" , function(dets){
    crsr.style.left  =  dets.x + -10 +  "px",
    crsr.style.top = dets.y -10 + "px"
})


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0 solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})





gsap.to("#nav" , {
    backgroundColor: "black",
    duration: 0.5,
    height: "120px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top 11%",
        scrub: 2
    }
})


