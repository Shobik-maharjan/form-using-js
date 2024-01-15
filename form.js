// function submitBtn() {

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const number = document.getElementById("number");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
// }

const validateInputs = () => {
  isValid = true;
  firstName();
  lastName();
  emailCheck();
  numberCheck();
  passwordCheck();

  if (isValid) {
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(number.value);
    console.log(password.value);
  }
};

const firstName = () => {
  if (fname.value === "" || fname.value === null) {
    setError(fname, "first name is required");
    setErrorColor("fname");
    isValid = false;
  } else {
    setSuccessColor("fname");
    setSuccess(fname);
  }
};

const lastName = () => {
  if (lname.value === "" || lname.value === null) {
    setError(lname, "last name is required");
    setErrorColor("lname");
    isValid = false;
  } else {
    setSuccessColor("lname");
    setSuccess(lname);
  }
};

const emailCheck = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.value === "" || email.value === null) {
    setError(email, "email is required");
    setErrorColor("email");
    isValid = false;
    // return false;
  } else if (!email.value.match(emailRegex)) {
    setError(email, "email format is not correct");
    setErrorColor("email");
    isValid = false;
  } else {
    setSuccess(email);
    setSuccessColor("email");
  }
};

const numberCheck = () => {
  const numberRegex = /^98\d{8}$/;
  if (number.value === "" || number.value === null) {
    setError(number, "number is required");
    setErrorColor("number");
    isValid = false;
    // return false;
  }
  if (!number.value.match(numberRegex)) {
    setError(number, "number must be 10 digits and starts from 98");
    setErrorColor("number");
    isValid = false;
    // return false;
  } else {
    setSuccess(number);
    setSuccessColor("number");
  }
};

const passwordCheck = () => {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (password.value === "" || password.value === null) {
    setError(password, "password is required");
    setErrorColor("password");
    isValid = false;
    return false;
  }
  if (!password.value.match(passwordRegex)) {
    setSuccess(password, "");
    setError(
      password2,
      "The password must be more than 8 characters, less than 16 characters, 1 upper case, 1 numeric character, and one special character."
    );
    setErrorColor("password");
    setErrorColor("password2");
    isValid = false;
    return false;
  } else {
    setSuccess(password);
    setSuccessColor("password");
  }

  if (password.value != password2.value) {
    setError(password2, "password doesnot match");
    setErrorColor("password2");
    isValid = false;
    // return false;
  } else {
    setSuccess(password);
    setSuccess(password2);
    setSuccessColor("password");
    setSuccessColor("password2");
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setErrorColor = (element) => {
  document.getElementById(element).style.borderColor = "red";
};

const setSuccessColor = (element) => {
  document.getElementById(element).style.borderColor = "green";
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
