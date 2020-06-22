// grabing required elements
const airlines = document.querySelector("#airlines-dropdown");
const flightDateTime = document.querySelector("#flight-date-and-time");
const interuptionType = document.querySelector("#interuption");
const cancelation = document.querySelector("#cancellation-checkbox");
const delay = document.querySelector("#delay-checkbox");
const flightNumber = document.querySelector("#flight-number");
const newFlightDateTime = document.querySelector("new-flight-date-and-time");
const delayTime = document.querySelector("#delay-time");
const form = document.querySelector("#claim-form");

// event listeners
interuptionType.addEventListener("change", isChecked);
form.addEventListener("submit", formValidation);


// functions 

// checks the selected checkbox
function isChecked(e) {
  // grabing all checkboxes
  let checkboxes = document.querySelectorAll(".checkbox input[type='checkbox'");

  // looping over all checkboxes
  checkboxes.forEach(checkbox => {
    if (checkbox !== e.target) {
      checkbox.checked = false;

      interuptionExtension();
    }
  });
}

// display extended inputs for selected checkbox
function interuptionExtension() {
  // grabs checkboxes extensions
  let cancelationEntension = document.querySelector(".cancelation-hidden");
  let delayEntension = document.querySelector(".delay-hidden");

  if (!!cancelation.checked) {
    // sets display to extension to block for selected checkbox
    cancelationEntension.setAttribute("style", "position: inherit !important");
    delayEntension.style.position = "initial";
  } else if (!!delay.checked) {
    // sets display of extension to block for selected checkbox
    delayEntension.setAttribute("style", "position: inherit !important");
    cancelationEntension.style.position = "initial";
  } else {
    // sets display to none for extensions when unchecked
    cancelationEntension.style.position = "initial";
    delayEntension.style.position = "initial";
  }
}

// validates form
function formValidation(e) {
  e.preventDefault();

  checkInputs();
  console.log("submit successful");
}

// checks the input feilds
function checkInputs() {


  let airlinesValue = airlines.value;
  let flightDateTimeValue = flightDateTime.value;
  let interuptionTypeValue = false;
  let flightNumberValue = flightNumber.value.trim();
  let newFlightDateTimeValue = newFlightDateTime.value;
  let delayTimeValue = delayTime.value;

  // validates airlines dropdown
  if (airlinesValue === "select-an-option") {
    setErrorFor(airlines, "Please select valid option");
  }
  else {
    setErrorFor(airlines, "");
  }
  
  // validates flight date and time
  if (flightDateTimeValue === "") {
    setErrorFor(flightDateTime, "Please insert the date and time");
  }
  else {
    setErrorFor(flightDateTime, "");
  }

    // validates interuption type
  if (!interuptionTypeValue) {
    setErrorFor(interuptionType, "Please select one of the option");
  }
  else {
    setErrorFor(interuptionType, "");
  }
  
  // validates flight number
  if (flightNumberValue === "") {
    setErrorFor(flightNumber, "Please insert flight number");
  }
  else if (!validateFlightNumber(flightNumberValue)) {
    setErrorFor(flightNumber, "Flight number invalid. Try again");
  }
  else {
    setErrorFor(flightNumber, "");
  }

  // validates new flight date and time
  
  
}

// sets error class
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector(".message");

  // adds error message
  small.innerText = message;
  small.classList.add("error");
}
 
// flight number validaion
function validateFlightNumber(flightNumber) {
  return /^[A-Z]{2}\d{3,4}$/g.test(flightNumber);
}
