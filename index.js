$(document).ready(function() {
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),  
    });
    
    $('.site-wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ],
        nextArrow:$('.next'),
        prevArrow:$('.prev'),  
    });
});

document.addEventListener("keypress", getKey);

function getKey(press)
{
    var keycode = press.which;
    character = String.fromCharCode(keycode);
    var key_out = document.getElementById("keys");
    key_out.innerHTML += character;
}

function mousealert() {
    alert("Checkbox menu");
}

document.getElementsByClassName("check").addEventListener("click", mousealert);

function addComment() {
    //the element
    let comment = document.getElementsByClassName("info");

    //array
    let info = [];

    //setting the info
    info[0] = "";
    info[1] = "";
    info[2] = "";

    let i = Math.floor(Math.random() * info.length);

    //Set the info
    comment.innerHTML = info[i];
}

const buttons = document.querySelectorAll("[data-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.button === "next" ? 1 : -1
        const slides = button.closest("[data-carousel").querySelector("[data-slides")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex =slides.children.length -1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active =true
        delete activeSlide.dataset.active
    })
})
