// This validation is done by using JS.

// But now in HTML5, you do not need JS for simple validations. You can use required attribute in the input
// for the fields you don't want user to leave empty. For email, you can set type to email so that
// user don't enter invlaid emial.

// Note: This is client side validation, don't forget to validate on server side.


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
    // console.log("here");
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
function isEmail(mail) {
  const format = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  return format.test(mail);
}