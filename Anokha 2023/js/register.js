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

function validate1()
{
  let uname = document.getElementById("uname");
  let email = document.getElementById("email");
  let passwd = document.getElementById("pwd");
  let confirmPasswd = document.getElementById("crfmpwd");
  var validName = /^[a-zA-Z\-\s]+$/;
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validPwd =  /^[A-Za-z]\w{7,14}$/;
  if(uname.value.match(validName)){
    if(email.value.match(validEmail)){
      if(passwd.value.match(validPwd) && passwd.value.length>8){
        if(confirmPasswd.value == passwd.value)
        {
          return true;
        }
        else{
          alert("Passwords don't match, Check again!");
          return false;
        }
      }
      else{ 
        alert("Enter a Valid Password!")
        return false;
      }
    }
    else{ 
      alert("Enter a Valid Email Address!");
      return false;
    }
  }
  else{ 
    alert("Enter a Valid Username!");
    return false;
  }
  
}
function validate2()
{
  /*let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let passwd = document.getElementById("pwd");
  let confirmPasswd = document.getElementById("crfmpwd");
  var validName = /^[a-zA-Z\-\s]+$/;
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validPwd =  /^[A-Za-z]\w{7,14}$/;
  if(uname.value.match(validName)){
    if(email.value.match(validEmail)){
      if(passwd.value.match(validPwd) && passwd.value.length>8){
        if(confirmPasswd.value == passwd.value)
        {
          return true;
        }
        else{
          alert("Passwords don't match, Check again!");
          return false;
        }
      }
      else{ 
        alert("Enter a Valid Password!")
        return false;
      }
    }
    else{ 
      alert("Enter a Valid Email Address!");
      return false;
    }
  }
  else{ 
    alert("Enter a Valid Username!");
    return false;
  }*/
}
function validate3()
{
  
}

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

next1.onclick = function () {
  if(validate1()== true)
  {
    form1.style.left = "-450px";
    form2.style.left = "50px";
  }
  
};
back1.onclick = function () {
  
  form1.style.left = "50px";
  form2.style.left = "550px";
};
next2.onclick = function () {
  if(validate2()== true)
  {
    form1.style.left = "-450px";
    form2.style.left = "50px";
  }
  
};
back2.onclick = function () {
  form2.style.left = "50px";
  form3.style.left = "550px";
};

