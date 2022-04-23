const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone-number")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const errorMessage = document.querySelector(".error-message")

const inputArray = [email, phone, password, confirmPassword]

inputArray.forEach((item) => {
    item.addEventListener("focusin", () => {
      errorMessage.textContent = "";
      item.classList.remove("error");
      if (item == password || item == confirmPassword) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
      }
    });
  });

  