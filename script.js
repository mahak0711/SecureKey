const passwordBox = document.getElementById("password");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = "~!@#$%^&*(){}|:[]<>?";

const allChars = upperCase + lowerCase + number + symbol;

// Update displayed password length when range input changes
lengthRange.addEventListener("input", function() {
    lengthValue.textContent = lengthRange.value;
});

function shufflePassword(password) {
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

function createPassword() {
    const length = parseInt(lengthRange.value); // Get password length from the range input
    let password = "";

    // Ensuring at least one character from each set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password with random characters from allChars
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to mix the guaranteed characters
    password = shufflePassword(password);

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}