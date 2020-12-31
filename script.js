// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create user input function
generateBtn.addEventListener("click", generatePassword);
{
  function generatePassword() {
    length = parseInt(
      prompt(
        "How many character would you like your password to be? Choose between 8 and 128"
      )
    );
    
    if (!length) {
      alert("A value is required.");
    }
// Alert if password length does not meet required parameters
    while (length < 8 || length > 128) {
      length = parseInt(
        prompt("Password must be within 8 and 128 characters.")
      );
    }
// Prompts for user input
    confirmLower = confirm("Will this contain lowercase letters?");
    confirmUpper = confirm("Will this contain uppercase letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmChar = confirm("Will this contain special characters?");
// Alert if no user input is provided
    if (!confirmChar && !confirmLower && !confirmUpper && !confirmNumber) {
      alert("You must provide an password information.");
    }

    var choices = [];
    if (confirmLower) {
      choices.push("lower");
    }
    if (confirmUpper) {
      choices.push("upper");
    }
    if (confirmNumber) {
      choices.push("number");
    }
    if (confirmChar) {
      choices.push("char");
    }

    return generateString(choices);
  }
}

function generateString(choices) {
  var newPassword = "";

  for (var i = 0; i < length; i++) {
    switch (choices[Math.floor(Math.random() * choices.length)]) {
      case "char":
        newPassword = newPassword + getRandomChar();
        break;
      case "number":
        newPassword = newPassword + getRandomNumber();
        break;
      case "lower":
        newPassword = newPassword + getRandomLower();
        break;
      case "upper":
        newPassword = newPassword + getRandomUpper();
        break;
    }
  }

  return newPassword;
}

// Character generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toLowerCase();
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toUpperCase();
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomChar() {
  const char = "!@#$%^&*(){}[]=<>";
  return char[Math.floor(Math.random() * char.length)];
}
