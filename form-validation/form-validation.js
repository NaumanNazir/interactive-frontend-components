// grabing all the required elements
const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// event listeners
form.addEventListener("submit", formValidation);

// functions


function formValidation(e) {
  e.preventDefault();

  checkInputs();
}

// checks the input feilds
function checkInputs() {
  let firstNameValue = firstName.value.trim();
  let secondNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  // checks first name field
  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }

  // checks last name field
  if (secondNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  // checks email field
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }

  // check password field
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }
}

// sets error class
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");

  // adds error message
  small.innerText = message;
  // adds error class
  formControl.className = "form-control error";
}

// sets input success
function setSuccessFor(input) {
  let formControl = input.parentElement;

  // adds success class
  formControl.className = "form-control success";
}

// checks email format 
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}