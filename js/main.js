// read the background change

let svgArrowRight = document.getElementById("svgArrowRight");
let svgArrowLeft = document.getElementById("svgArrowLeft");
let svgHeader = document.getElementById("svgHeader");
let headerBtnclicked = false;
let leftArrowclicked = false;
let rightArrowclicked = false;
let homeBox2 = document.querySelector(".home-box-2");
let homeBox1 = document.querySelector(".home-box-1");
let arrowLeft = document.querySelector(".svg-arrow-left");
let arrowRight = document.querySelector(".svg-arrow-right");
let headerBtn = document.querySelector(".header");


svgHeader.addEventListener("click", ()=> {

  console.log("Hi");

  

  if(!headerBtnclicked) {
    headerBtn.classList.add("header-expand");
    headerBtnclicked = true;
  }
  else {
    headerBtn.classList.remove("header-expand");
    headerBtnclicked = false;
  }

});


svgArrowLeft.addEventListener("click", () => {

  let text = document.querySelectorAll(".home-text")
   text.forEach((el, index) => {

       el.setAttribute("style", `
       color: #363636;
     `);
   });

  if (!leftArrowclicked) {
    homeBox1.classList.add("home-box-compress");
    arrowLeft.setAttribute("style", `
     transform: rotate(180deg);
    `)
    leftArrowclicked = true;
  } else {
    homeBox1.classList.remove("home-box-compress");
    arrowLeft.setAttribute("style", `
       transform: rotate(360deg);
      `)
    leftArrowclicked = false;
  }

});


svgArrowRight.addEventListener("click", () => {

  let text = document.querySelectorAll(".home-text");
  text.forEach((el, index) => {

      el.setAttribute("style", `
      color: #ffffff;
    `);
  });
/*
  let homeSection = document.querySelector(".home");
  homeSection.setAttribute("style", `
  background-image: linear-gradient(to right, #363636 50%, #363636 50%);
  `);*/


  if (!rightArrowclicked) {
    homeBox2.setAttribute("style", `
    width: auto;
    `)
    homeBox1.classList.add("home-box-extend");
    arrowRight.setAttribute("style", `
     transform: rotate(180deg);
    `)
    rightArrowclicked = true;

  } else {
    homeBox1.classList.remove("home-box-extend");
    arrowRight.setAttribute("style", `
     transform: rotate(360deg);
    `)
    rightArrowclicked = false;
  }

});