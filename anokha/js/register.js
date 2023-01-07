/*
Author: Hem Sagar
Javascript reference: fontawesome.com(password visibility), w3schools(validation)
Javascript Author: Hem Sagar
created date: 24-DEC-2022
modified date: 6-JAN-2023
*/

function see() {
  let passwd = document.getElementById("pwd");
  let icon = document.getElementById("icon");
  if (passwd.type === "password") {
    passwd.type = "text";
    icon.className = "fas fa-eye-slash";
  } else {
    passwd.type = "password";
    icon.className = "fas fa-eye";
  }
}
function see1() {
  let confirmPasswd = document.getElementById("crfmpwd");
  let icon = document.getElementById("icon1");
  if (confirmPasswd.type == "password") {
    confirmPasswd.type = "text";
    icon.className = "fas fa-eye-slash";
  } else {
    confirmPasswd.type = "password";
    icon.className = "fas fa-eye";
  }
}

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");


function validate1() {
  let uname = document.getElementById("uname");
  let email = document.getElementById("email");
  let passwd = document.getElementById("pwd");
  let confirmPasswd = document.getElementById("crfmpwd");
  var validName = /^[a-zA-Z0-9\-\s]+$/;
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validPwd = /^[A-Za-z0-9@#_]+\w{7,14}$/;
  if (uname.value.match(validName)) {
    if (email.value.match(validEmail)) {
      if (passwd.value.match(validPwd) && passwd.value.length > 8) {
        if (confirmPasswd.value == passwd.value) {
          return true;
        } else {
          alert("Passwords don't match, Check again!");
          return false;
        }
      } else {
        alert("Enter a Valid Password!");
        return false;
      }
    } else {
      alert("Enter a Valid Email Address!");
      return false;
    }
  } else {
    alert("Enter a Valid Username!");
    return false;
  }
}
function validate2() {
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let gender = document.getElementById("gender");
  let tel = document.getElementById("tel");
  var validName = /^[a-zA-Z]+$/;
  //var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validTel = /[0-9]/;
  if (fname.value.match(validName)) {
    if (lname.value.match(validName)) {
      if (
        gender.value.match("Male") ||
        gender.value.match("Female") ||
        gender.value.match("Others")
      ) {
        if (tel.value.match(validTel) && tel.value.length == 10) {
          return true;
        } else {
          alert("Enter a Valid Telephone number!");
          return false;
        }
      } else {
        alert("Specify a valid gender (case-sensitive)!");
        return false;
      }
    } else {
      alert("Enter a valid last name!");
    }
  } else {
    alert("Enter a Valid first name!");
    return false;
  }
}
function validate3() {
  let clgName = document.getElementById("clgname");
  let roll = document.getElementById("rollno");
  let gradYear = document.getElementById("gradyear");
  let idCard = document.getElementById("idcard");
  var validName = /^[a-zA-Z]+$/;
  var validRoll = /([A-Z0-9])/;
  var validYr = /[0-9]/;
  //var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validFile = /([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/;
  if (clgName.value.match(validName)) {
    if (roll.value.match(validRoll)) {
      if (gradYear.value.match(validYr) && gradYear.value > 2022) {
        if (idCard.value.match(validFile)) {
            window.alert("Registration Successful!");
            window.location.href = "https://hemsagar11.github.io/20CYS202-UID/anokha/index.html";
        } else {
          alert("Upload a file with a valid extension(.doc, .docx, .pdf)!");
          return false;
        }
      } else {
        alert("Enter valid graduation year! (>2022)");
        return false;
      }
    }
    else{
      alert("Enter valid roll no!");
    }
  } else {
    alert("Enter a Valid college name!");
    return false;
  }
}


next1.onclick = function () {
  if (validate1() == true) {
    form1.style.left = "-450px";
    form2.style.left = "50px";
  }
};
back1.onclick = function () {
  form1.style.left = "50px";
  form2.style.left = "550px";
};
next2.onclick = function () {
  if (validate2() == true) {
    form2.style.left = "-450px";
    form3.style.left = "50px";
  }
};
back2.onclick = function () {
  form2.style.left = "50px";
  form3.style.left = "550px";
};
