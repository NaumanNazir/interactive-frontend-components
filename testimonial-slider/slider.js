const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// in order to make slider auto
// const auto = false;
// const interval = 5000;
// let slideInterval;    

// functions

// next slide
const nextSlide = () => {
  const current =  document.querySelector(".current");
  
  //removes current class 
  current.classList.remove("current");

  // check for next slide
  if (!!current.nextElementSibling) {
    // add current to next sibling element
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to first element
    console.log(slides[0]);
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
}

// previous slide
const prevSlide = () => {
  const current =  document.querySelector(".current");

  //removes current class 
  current.classList.remove("current");
  
  // check for previous slide
  if (!!current.previousElementSibling) {
    // add current to previous sibling element
    console.log("prev");
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to first element
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
}

// events listener
next.addEventListener("click", e => {
  nextSlide();
});

prev.addEventListener("click", e => {
  prevSlide();
});