const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// in order to make slider auto
const auto = true;
const intervalTime = 5000;
let slideInterval;    

// event listeners 

prev.addEventListener("click", function(e) {
  prevSlide();
  // for auto slides change
  if (!!auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

next.addEventListener("click", function(e) {
  nextSlide();
  // for auto slides change
  if (!!auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// for auto slides change
if (!!auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// functions

// previous slide
function prevSlide() {
  let current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");

  // gets the previous slide and assign current class to it
  if (!!current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // add current class to the last slide
    slides[slides.length - 1].classList.add("current");
  }
}

// next slide
function nextSlide() {
  let current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");

  // gets the previous slide and assign current class to it
  if(!!current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    //add the current class to the first slide
    slides[0].classList.add("current");
  }
}


// ------------------------- with arrow functions ----------------------------------- //

// const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");

// // in order to make slider auto
// // const auto = false;
// // const interval = 5000;
// // let slideInterval;    

// // functions

// // next slide
// const nextSlide = () => {
//   const current =  document.querySelector(".current");
  
//   //removes current class 
//   current.classList.remove("current");

//   // check for next slide
//   if (!!current.nextElementSibling) {
//     // add current to next sibling element
//     current.nextElementSibling.classList.add("current");
//   } else {
//     // add current to first element
//     console.log(slides[0]);
//     slides[0].classList.add("current");
//   }

//   setTimeout(() => current.classList.remove("current"));
// }

// // previous slide
// const prevSlide = () => {
//   const current =  document.querySelector(".current");

//   //removes current class 
//   current.classList.remove("current");
  
//   // check for previous slide
//   if (!!current.previousElementSibling) {
//     // add current to previous sibling element
//     console.log("prev");
//     current.previousElementSibling.classList.add("current");
//   } else {
//     // add current to first element
//     slides[slides.length - 1].classList.add("current");
//   }

//   setTimeout(() => current.classList.remove("current"));
// }

// // events listener
// next.addEventListener("click", e => {
//   nextSlide();
//   // for auto slides change
//   if (!!auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// prev.addEventListener("click", e => {
//   prevSlide();
//   // for auto slides change
//   if (!!auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// // for auto slides change
// if (!!auto) {
//   slideInterval = setInterval(nextSlide, intervalTime);
// }



