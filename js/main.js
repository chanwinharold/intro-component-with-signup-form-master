const regexNames = new RegExp("^[A-Za-z]+$")
const regexEmail = new RegExp("^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z0-9]+$")
const regexPassword = new RegExp("^.{8,}$")

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()

    document.querySelectorAll("input").forEach((input) => {
        if (input.value.trim() === "") {
            addError(input, `${input.placeholder} cannot be empty`)
        } else {
            if (["name", "last_name"].includes(input.name) && !(regexNames.test(input.value))) {
                addError(input, `Please enter a valid ${input.placeholder}`)
            }
            if (input.name === "email" && !(regexEmail.test(input.value))) {
                addError(input, "Looks like this is not an email")
            }
            if (input.name === "password" && !(regexPassword.test(input.value))) {
                addError(input, "Password should contain at least 8 characters")
            }
        }
    })
})

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            removeError(input)
        }
    })
})


function addError(input, message) {
    document.querySelector(`input[name="${input.name}"] + span`).textContent = message
    document.querySelector(`.${input.name}`).src = "images/icon-error.svg"
    input.style.borderColor = "hsl(0, 100%, 74%)"
    input.style.color = "hsl(0, 100%, 74%)"
}
function removeError(input) {
    document.querySelector(`input[name="${input.name}"] + span`).textContent = ""
    document.querySelector(`.${input.name}`).src = ""
    input.style.borderColor = "hsl(246, 25%, 77%)"
    input.style.color = "black"
}