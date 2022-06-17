window.addEventListener("load", function(){new WOW().init()})

// used to initialize the typing effect on the website
let typed=new Typed(".typing-effect", {
    strings: [
        "Business", 
        "Brand", 
        "Start Up"
    ], 
    backSpeed:"9", 
    typeSpeed:"9", 
    loop:true
})

// used to initialize the conting effect on the website
$('.counter').counterUp({
    delay: 10,
    time: 1000
});