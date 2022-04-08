let form = document.querySelector("form");
let submitBtn = document.getElementById("submitBtn");
let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
let emailErrorMsg = document.getElementById("emailErrorMsg");
let passwordErrorMsg = document.getElementById("passwordErrorMsg");

//function checks if an input is blank or not
const checkBlankInput = (input) => {
  //select the label of the input
  let label = input.closest(["label"]);
  //select the span sign error of the input
  let errorSign = label.querySelector("span");
  //this regex check if the user has written something or not
  let blankRegExp = new RegExp(/^\s*$/, "g");
  let allInputs = blankRegExp.test(input.value);
  if (allInputs || input.value.length === 0) {
    input.classList.add("error-input");
    errorSign.style.display = "block";
    return false;
  } else {
    input.classList.remove("error-input");
    errorSign.style.display = "none";
    return true;
  }
};

//function checks input validity
const inputVerifier = () => {
  if (checkBlankInput(form.firstName) === false) {
    firstNameErrorMsg.textContent = `First Name cannot be empty`;
  } else {
    firstNameErrorMsg.textContent = "";
  }
  if (checkBlankInput(form.lastName) === false) {
    lastNameErrorMsg.textContent = `Last Name cannot be empty`;
  } else {
    lastNameErrorMsg.textContent = "";
  }
  if (checkBlankInput(form.email) === false) {
    emailErrorMsg.textContent = `Email cannot be empty`;
  } else {
    emailErrorMsg.textContent = "";
  }
  if (checkBlankInput(form.password) === false) {
    passwordErrorMsg.textContent = `Password cannot be empty`;
  } else {
    passwordErrorMsg.textContent = "";
  }
};

//function check email input validity
const validEmailInput = (input) => {
  let label = input.closest(["label"]);
  let errorSign = label.querySelector("span");
  let emailRegExp = new RegExp(
    /^[a-zA-Z0-9\.\-\_]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,}$/,
    "g"
  );
  let testEmail = emailRegExp.test(input.value);
  if (testEmail) {
    input.classList.remove("error-input");
    errorSign.style.display = "none";
    emailErrorMsg.textContent = " ";

    return true;
  } else {
    input.classList.add("error-input");
    errorSign.style.display = "block";
    emailErrorMsg.textContent = "Looks like this is not an email";
    return false;
  }
};

//function check password input validity
const passwordInput = (input) => {
  let label = input.closest(["label"]);
  let errorSign = label.querySelector("span");
  //password need to have at least 8 chars, 1 lowercase, 1 uppercase and 1 digit
  let passwordRegExp = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{1,}$/,
    "g"
  );
  let passwordInput = passwordRegExp.test(input.value);
  if (passwordInput) {
    console.log("bon mdp");
    input.classList.remove("error-input");
    errorSign.style.display = "none";
    passwordErrorMsg.textContent = "";
    return true;
  } else {
    input.classList.add("error-input");
    errorSign.style.display = "block";
    passwordErrorMsg.textContent =
      "Your password must contain a number and an uppercase letter";
    return false;
  }
};

const formSubmit = () => {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputVerifier();
    validEmailInput(form.email);
    passwordInput(form.password);
  });
};

formSubmit();
