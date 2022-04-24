const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone-number")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const errorMessage = document.querySelector("#error-message")
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    let messages = []

    //redundant as form is set to "required", i just wanted to test this
    if (firstName.value === "" || firstName.value === null) {
        messages.push("First name is required")
    }

    if (password.value.length < 8  || password.value.length > 20) {
        messages.push("Password must be between 8 and 20 characters")
    }

    if (password.value !== confirmPassword.value) {
        messages.push("Passwords must match")

    }

    if (messages != null) {
        e.preventDefault()
        errorMessage.innerHTML = messages.join(", ")

    }
    
 
})