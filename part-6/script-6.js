function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var halValue = splittedText.length / 2;

    var clutter = ""

    // splittedText.forEach((e) => {
    //     clutter += `<span>${e}</span>`
    // })

    h1.innerHTML = clutter

    splittedText.forEach((e, i) => {
        if (i < halValue) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}
breakTheText()

// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.15,
// })
gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
})
gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15,
})