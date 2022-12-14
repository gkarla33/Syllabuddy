function validatePassword() {
  var numbers = /[0-9]/g;
  var lowerCase = /[a-z]/g;
  var upperCase = /[A-Z]/g;
  
  var password = document.getElementById("signupPassword").value;
  
  if (password.length < 10) {
    return "Password must contain at least 10 characters";
  }
  else if(!password.match(numbers)) {
    return "Password must contain at least one digit (0-9)";
  }
  else if(!password.match(upperCase)) {
    return "Password must contain at least one uppercase letter (A-Z)";
  }
  else if(!password.match(lowerCase)) {
    return "Password must contain at least one lowercase letter (a-z)";
  }
  
  return null;
}

function setMessageForm(formElement, type, message) {
  const messageContent = formElement.querySelector(".form__message");
  messageContent.textContent = message;
  messageContent.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageContent.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement, message) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

const containerForm = document.querySelector("#loginPage");
const loginForm = document.querySelector("#login");
const signupForm = document.querySelector("#signup");

document.getElementById('todoBtn').onclick = function() {
    var div = document.getElementById('todoPop');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

document.getElementById('courseBtn').onclick = function() {
    var div = document.getElementById('courseInfo');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

document.getElementById('courseBtn1').onclick = function() {
    var div = document.getElementById('courseInfo');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

document.getElementById('courseBtn2').onclick = function() {
    var div = document.getElementById('courseInfo1');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
document.getElementById('courseBtn3').onclick = function() {
    var div = document.getElementById('courseInfo1');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

document.getElementById('courseBtn4').onclick = function() {
    var div = document.getElementById('courseInfo2');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
document.getElementById('courseBtn5').onclick = function() {
    var div = document.getElementById('courseInfo2');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
document.getElementById('x').onclick = function() {
    var div = document.getElementById('courseInfo');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
document.getElementById('x1').onclick = function() {
    var div = document.getElementById('courseInfo1');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
document.getElementById('x2').onclick = function() {
    var div = document.getElementById('courseInfo2');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form--hidden");
  signupForm.classList.remove("form--hidden");
});
