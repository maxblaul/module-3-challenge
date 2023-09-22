// Assignment Code  List of variables for password, made a string and then split to make an array
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numericCharacters = "1234567890".split('');
var specialCharacters = "~!@#$%^&*".split('');

var generateBtn = document.querySelector("#generate");

function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex];
  return randomElement;
}
// Function to get random outcome from array above
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
  //store password as we concatenate
  var result = [];
  //store possible types of chars 
  var possibleChars = [];
  //array to store guaranteed chars
  var guaranteedChars = [];
  //check that criteria exists
  if(!criteria) return null;
// Designates that if the user does not submit a number for character quantity that it comes back null.
  if(criteria.hasSpecial){
    possibleChars = possibleChars.concat(specialCharacters);
    guaranteedChars.push(getRandom(specialCharacters));
  }
  // if user chooses special chars then it will be pushed from possible to guranteed chars.
  if(criteria.hasUpper){
    possibleChars = possibleChars.concat(upperCaseLetters);
    guaranteedChars.push(getRandom(upperCaseLetters));
  }
  // if user chooses upper case letters then it will be pushed from possible to guranteed chars.
  if(criteria.hasLower){
    possibleChars = possibleChars.concat(lowercaseLetters);
    guaranteedChars.push(getRandom(lowercaseLetters));
  }
  // if user chooses lower case letters then it will be pushed from possible to guranteed chars.
  if(criteria.hasNumbers){
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(getRandom(numericCharacters));
  }
  // if user chooses numbers  then it will be pushed from possible to guranteed chars.
  console.log("Possible Chars: " + possibleChars);
  console.log("Guaranteed Chars: " + guaranteedChars);
  //iterate over the passowrd length from our object selecting a random element
  for(var i = 0; i < criteria.passwordLength; i++){
    var possibleCharacter = getRandom(possibleChars);
    result.push(possibleCharacter);
  }
  //loop over guaranteed chars making sure atleast one is in the array
  for(var i = 0; i < guaranteedChars.length; i++){
    result[i] = guaranteedChars[i];
  }
  console.log(result);
  //convert array back to string
  return result.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
