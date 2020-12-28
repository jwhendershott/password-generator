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
generateBtn.addEventListener("click", generatePassword); {

  function generatePassword() {

    length = parseInt(prompt("How many character would you like your password to be? Choose between 8 and 128"));
    if (!length) {
      alert("A value is required.");
    }  
    else if (length < 8 || length > 128 ) {
        length = parseInt(prompt("Password must be within 8 and 128 characters."));
      }
      
      
    
  }

}

//Generator Functions

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  char: getRandomChar
};

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomChar () {
  const char = '!@#$%^&*(){}[]=<>'
  return char[Math.floor(Math.random() * char.length)];
}

console.log(getRandomChar());

