// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  console.log ("generate passowrd function running")
  var passwordLength;
// open ended questions for users
// yes o rno questions for users
function letpasswordLength = prompt("Pick a number between 8 and 128 for your password length.")
   console.log
//if (its invalid **multiple conditions in if statement**) {return "You must enter a valid integer"}
  var lowercaseLetters =  ["abcdefghijklmnopqrstuvwxyz"]
  var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var numericCharacters = ["1234567890"]
  var specialCharacters = ["~`!@#$%^&*()_-><.,;:'?+={[*/}]"]
  var selectOne = false

// let passwordLength = prompt("Enter the length of the password you want, between 8 and 128 characters.")
// passwordLength = par(passwordLength)

if (isNaN(passwordLength)) passwordLength < 8 || passwordLength > 128
  alert("Enter a number between 8 and 128")

  if (selectOne == false){
    console.log ("it wasn't selected")
    return "You Must Select One Option"
  }
  
  var password = "Max Blaul"
  return password 
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var firstName = "Al"
var firstNameHalf = "ex"
firstName = firstName.concat(firstNameHalf)
console.log(firstName)