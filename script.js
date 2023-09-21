// Assignment Code
var lowercaseLetters =  ["abcdefghijklmnopqrstuvwxyz"]
var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numericCharacters = ["1234567890"]
var specialCharacters = ["~`!@#$%^&*()_-><.,;:'?+={[*/}]"]
var generateBtn = document.querySelector("#generate");


function getCriteria(){
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  console.log(passwordLength);
  if(Number.isNaN(passwordLength)){
    alert("Password length must be a number.")
    return null;
  }
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password length must be atleast 8 chars and no more than 128");
    return null;
  }
  // if(passwordLength > 128){
  //   alert("Password length must be less than 128 chars");
  //   return null;
  // }
  var hasNumbers = confirm("Click OK to confirm using numeric chars");
  var hasUpper = confirm("Click OK to confirm using upper chars");
  var hasLower = confirm("Click Ok to confirm using lower chars");
  var hasSpecial = confirm("Click OK to confirm using special chars");

  if(!hasNumbers &&
     !hasUpper &&
     !hasLower &&
     !hasSpecial){
      alert("Must select atleast on char type");
      return null;
     }

     var passwordCriteria = {
      passwordLength: passwordLength,
      hasSpecial: hasSpecial,
      hasUpper: hasUpper,
      hasLower: hasLower,
      hasNumbers: hasNumbers
     };

     return passwordCriteria;
}
// Write password to the #password input
function generatePassword () {
  console.log ("generate passowrd function running")
  var criteria = getCriteria();
  console.log(criteria);
  var password = "Max Blaul";
  return password ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var firstName = "Al"
// var firstNameHalf = "ex"
// firstName = firstName.concat(firstNameHalf)
// console.log(firstName)