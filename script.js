// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  console.log ("generate passowrd function running")
  var passwordLength;
//open ended questions for users
// yes o rno questions for users

//if (its invalid **multiple conditions in if statement**) {return "You must enter a valid integer"}
  var passwordBase;  //string or array, up to you (howver you store the characters)
  var lowercaseLetters; //if you go with string or array
  var userWantsLowerCase;
  var userWantsUpperCase;
  var userWantsNumbers;
  var userWantsSpecialCharacters;
  var selectOne = false


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