var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove", (dets) =>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8,
        ease: "back.out(1.7)",
    })
})

image.addEventListener("mouseenter", () =>{
    cursor.innerHTML = "Hot girl"
    gsap.to(cursor,{
        scale: 2,
        backgroundColor: "red"
    })
})
image.addEventListener("mouseleave", () =>{
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "white"
    })
})
