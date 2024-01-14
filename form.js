// function submitBtn() {

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
// }

const validateInputs = () => {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  if (fname.value === "" || fname.value === null) {
    setError(fname, "first name is required");
    setErrorColor("fname");
    return false;
  } else {
    setSuccessColor("fname");
    document.getElementById("fname").style.borderColor = "green";
    setSuccess(fname);
  }
  if (lname.value === "" || lname.value === null) {
    setError(lname, "last name is required");
    setErrorColor("lname");
    return false;
  } else {
    setSuccess(lname);
    setSuccessColor("lname");
  }
  if (email.value === "" || email.value === null) {
    setError(email, "email is required");
    setErrorColor("email");
    return false;
  } else {
    setSuccess(email);
    setSuccessColor("email");
  }
  if (number.value === "" || number.value === null) {
    setError(number, "number is required");
    setErrorColor("number");
    return false;
  }
  if (!number.value.match(numberFormat)) {
    setError(number, "number must be 10 digits and starts from 98");
    setErrorColor("number");
    return false;
  } else {
    setSuccess(number);
    setSuccessColor("number");
  }

  if (password.value === "" || password.value === null) {
    setError(password, "password is required");
    setErrorColor("password");
    return false;
  } else {
    setSuccess(password);
  }

  if (!password.value.match(passwordFormat)) {
    setError(
      password2,
      "The password must be more than 8 characters, less than 16 characters, 1 upper case, 1 numeric character, and one special character."
    );
    setErrorColor("password2");
    return false;
  }
  if (password.value != password2.value) {
    setError(password2, "password doesnot match");
    setErrorColor("password2");
    return false;
  }
  if (password.value == password2.value) {
    setSuccess(password);
    setSuccess(password2);
    setSuccessColor("password");
    setSuccessColor("password2");
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(password.value);
  }
};

const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const numberFormat = /^98\d{8}$/;

// let confirmPassword = function () {
//   if (
//     document.getElementById("password").value ==
//     document.getElementById("password2").value
//   ) {
//     document.getElementById("message").style.color = "green";
//     document.getElementById("message").innerHTML = "Password match!";
//   } else {
//     document.getElementById("message").style.color = "red";
//     document.getElementById("message").innerHTML = "Password do not match!";
//   }
// };

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
