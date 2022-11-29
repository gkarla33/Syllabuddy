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

const containerForm = document.querySelector("#containerID");
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#account");

document.querySelectorAll(".form__input").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {
    if (e.target.id === "signupUsername" && e.target.value.length < 10) {
      setInputError(inputElement, "Username must have at least 10 characters");
    }
  });
  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});

document.querySelectorAll(".form__input").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {});
  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});

document.querySelectorAll(".form__input").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {
    if (
        e.target.id === "signupPassConfirm" &&
        document.getElementById("signupPassword").value !== e.target.value) {
      setInputError(inputElement, "Passwords do not match");
    }
    if (e.target.id === "signupPassword") {
      let message = validatePassword();

      if (message != null) {
        setInputError(inputElement, message);
      }
    }
  });
  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});
document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form--hidden");
  createAccountForm.classList.remove("form--hidden");
});

document.querySelector("#continue").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form--hidden");
  containerForm.classList.add("form--hidden");
});

document.querySelector("#continueSignUp").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form--hidden");
  containerForm.classList.add("form--hidden");
});

document.querySelector("#linkLogin").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form--hidden");
  createAccountForm.classList.add("form--hidden");
});

document.querySelectorAll(".form__input").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {
    if (e.target.id == "signupUsername" && e.target.value.length < 10) {
      setInputError(inputElement, "Username must have at least 10 characters");
    }
  });
  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});

document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
        clearInputError(inputElement);
    });
});

document.querySelectorAll(".form__input").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {
    if (
      e.target.id == "signupPassConfirm" &&
      document.getElementById("signupPassword").value != e.target.value) {
      setInputError(inputElement, "Passwords do not match");
    } 
    if (e.target.id == "signupPassword") {
      var message = validatePassword();
      
      if (message != null) {
        setInputError(inputElement, message);
      }
    }
  });
  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});
