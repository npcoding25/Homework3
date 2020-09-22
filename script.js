// List of variables
var passwordLength = prompt("How many characters do you want?")
var passwordSpecialChar = confirm("Do you want special characters")
var passwordNumber = confirm("Do you want numbers?")
var passwordUpperCase = confirm("Do you want uppercase letters?")
var passwordLowerCase = confirm("Do you want lowercase letters?")

// Password that user will see on screen
var finalPassword = ""

// Choosing characters from the answers of the previous variables
var finalCharSet = ""
  if(passwordSpecialChar) finalCharSet += "!@#$%^&*()"
  if(passwordNumber) finalCharSet += "0123456789"
  if(passwordUpperCase) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(passwordLowerCase) finalCharSet += "abcdefghijklmnopqrstuvwxyz"

// Loop to take the chosen password length and the selected characters and set it as the password
for( var i = 0; i < passwordLength; i++) {
  var selectedChar = parseInt( Math.random()*finalCharSet.length )
  finalPassword += finalCharSet[selectedChar]
}

// Function that applies the new password to textarea
function writePassword() {
  document.querySelector("#password").value = finalPassword
} 

// Making the button work and apply the function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 