// read the background change

var svgArrowRight = document.getElementById("svgArrowRight");
var svgArrowLeft = document.getElementById("svgArrowLeft");

svgArrowLeft.addEventListener("click", () => {

    /* var text = document.querySelectorAll(".home-text")
     text.forEach((el, index) => {

         el.setAttribute("style", `
         color: #363636;
       `);
     });*/

    var homeBox1 = document.querySelector(".home-box-1");
    homeBox1.classList.add("home-box-compress");

});

svgArrowRight.addEventListener("click", () => {

    /*var text = document.querySelectorAll(".home-text");
    text.forEach((el, index) => {

        el.setAttribute("style", `
        color: #ffffff;
      `);
    });

    var homeSection = document.querySelector(".home");
    homeSection.setAttribute("style", `
    background-image: linear-gradient(to right, #363636 50%, #363636 50%);
    `);*/
    var homeBox2 = document.querySelector(".home-box-2");
    homeBox2.setAttribute("style", `
    width: auto;
    `)
    var homeBox1 = document.querySelector(".home-box-1");
    homeBox1.classList.add("home-box-extend");





});