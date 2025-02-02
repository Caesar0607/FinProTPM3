document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-content");
    const teamNameInput = document.getElementById("team-name");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const binusianSelect = document.getElementById("binusian");
    const nextButton = document.querySelector(".next-btn");
    const eyeIcons = document.querySelectorAll(".eye-icon");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    eyeIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const inputField = this.previousElementSibling;
            if (inputField.type === "password") {
                inputField.type = "text";
                this.src = "./LoginRegisAsset/Icons - PNG/mdi_eye.png";
            } else {
                inputField.type = "password";
                this.src = "./LoginRegisAsset/Icons - PNG/mdi_eye.png"; 
            }
        });
    });

    function validateInput(input, condition, errorMessage) {
        const errorSpan = input.parentElement.querySelector(".error-message");
        if (condition) {
            input.style.border = "2px solid black"; 
            if (errorSpan) errorSpan.style.visibility = "hidden";
            return true;
        } else {
            input.style.border = "2px solid red"; 
            if (errorSpan) {
                errorSpan.textContent = errorMessage; 
                errorSpan.style.visibility = "visible";
            }
            return false;
        }
    }

    confirmPasswordInput.addEventListener("input", function () {
        validateInput(
            confirmPasswordInput,
            confirmPasswordInput.value === passwordInput.value,
            "*Passwords do not match"
        );
    });

    passwordInput.addEventListener("input", function () {
        validateInput(
            passwordInput,
            passwordRegex.test(passwordInput.value),
            "*Must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
        );
    });

    teamNameInput.addEventListener("input", function () {
        validateInput(teamNameInput, teamNameInput.value.trim() !== "", "*Please enter a valid team name");
    });

    binusianSelect.addEventListener("change", function () {
        validateInput(binusianSelect, binusianSelect.value !== "", "*Please select an option");
    });

    nextButton.addEventListener("click", function (event) {
        let isValid = true;

        if (!validateInput(teamNameInput, teamNameInput.value.trim() !== "", "*Please enter a valid team name")) {
            isValid = false;
        }
        if (!validateInput(passwordInput, passwordRegex.test(passwordInput.value),
            "*Must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.")) {
            isValid = false;
        }
        if (!validateInput(confirmPasswordInput, confirmPasswordInput.value === passwordInput.value, "*Passwords do not match")) {
            isValid = false;
        }
        if (!validateInput(binusianSelect, binusianSelect.value !== "", "*Please select an option")) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
