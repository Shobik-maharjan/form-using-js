function submitBtn() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  // if (fname != "") {
  //   if (lname != "") {
  //     if (
  //       email != "" &&
  //       email != /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  //     ) {
  //       if (password != password2) {
  //         console.log(`password is not correct`);
  //       } else {
  //         console.log(`password is correct and password is ${password}`);
  //       }

  //       console.log(`email is ${email}`);
  //     } else {
  //       document.getElementById("fname-message").style.color = "red";
  //       document.getElementById("fname-message").innerHTML =
  //         "email is not correct";
  //     }
  //     console.log(`Last Name is ${lname}`);
  //   } else {
  //     console.log(`Last Name is not correct`);
  //   }
  //   console.log(`First Name is ${fname}`);
  // } else {
  //   console.log(`First Name is not correct`);
  // }

  if (fname == "") {
    document.getElementById("fname-message").style.color = "red";
    document.getElementById("fname-message").innerHTML =
      "first name should not be empty";
    return false;
  } else {
    document.getElementById("fname-message").innerHTML = "";
    console.log(fname);
  }
  if (lname == "") {
    document.getElementById("lname-message").style.color = "red";
    document.getElementById("lname-message").innerHTML =
      "last name should not be empty";
    return false;
  } else {
    document.getElementById("lname-message").innerHTML = "";
    console.log(lname);
  }
  if (email == "") {
    document.getElementById("email-message").style.color = "red";
    document.getElementById("email-message").innerHTML =
      "email should not be empty";
    return false;
  } else {
    document.getElementById("email-message").innerHTML = "";
    console.log(email);
  }

  if (password == "") {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML =
      "password should not be empty";
    return false;
  } else {
    console.log(password);
  }
  if (password != password2) {
    alert("password doesnot natch");
  }
}

let confirmPassword = function () {
  if (
    document.getElementById("password").value ==
    document.getElementById("password2").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Password match!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Password do not match!";
  }
};
