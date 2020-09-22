var passwordLength = prompt("How many characters do you want?")
var passwordSpecialChar = confirm("Do you want special characters")
var passwordNumber = confirm("Do you want numbers?")
var passwordUpperCase = confirm("Do you want uppercase letters?")
var passwordLowerCase = confirm("Do you want lowercase letters?")
var finalPassword = ""


var finalCharSet = ""
if(passwordSpecialChar) finalCharSet += "!@#$%^&*()"
if(passwordNumber) finalCharSet += "0123456789"
if(passwordUpperCase) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(passwordLowerCase) finalCharSet += "abcdefghijklmnopqrstuvwxyz"

for( var i = 0; i < passwordLength; i++) {
  var selectedChar = parseInt( Math.random()*finalCharSet.length )
   finalPassword += finalCharSet[selectedChar]
  
}


function writePassword() {
   document.querySelector("#finalPassword").value = finalPassword

  // var finalPasswordText = document.querySelector("#password");
  
  // finalPasswordText.display = finalPassword;
}
 
  var generateBtn = document.querySelector("#generate");
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 