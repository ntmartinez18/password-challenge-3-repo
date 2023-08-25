// Assignment code here
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!'#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// created prompt sequence to receive password criteria from user
function generatePassword() { 
var options = "";
var password = "";

var randomLower = Math.floor(Math.random() * lowerCase.length);
var randomNumber = Math.floor(Math.random() * number.length);
var randomSymbol= Math.floor(Math.random() * symbol.length);

prompt1 = confirm("Select your password criteria?");
console.log(prompt1);

/* created if statements and confirms for password criteria */
length = prompt("How many characters would you like your password to be? (Enter number between 8-128)");
  if (length < 8) {
    alert("Must be > or equal to 8");
    generatePassword();
  } else if (length > 128) {
    alert("Must be less than 128");
    generatePassword();
  } else {
    console.log(length);
  };

prompt3 = confirm("Include character types?");
console.log(prompt3)

isUppercase = confirm("Include uppercase characters?");

isLowercase = confirm("Include lowercase characters?");

isNumber = confirm("Include numbers? (yes/no)");

isSymbol = confirm("Include special characters? (yes/no)");


if (isUppercase == true) {
  options = options.concat(upperCase);
} else if (isUppercase == false) {
  console.log(options);
};

if (isLowercase == true) {
  options = options.concat(lowerCase)
} else if (isLowercase == false) {
  console.log(options);
};

if (isNumber == true) {
  options = options.concat(number)
} else if (isNumber == false) {
console.log(options);
};

if (isSymbol == true) {
  options = options.concat(symbol)
} else if (isSymbol == false) {
console.log(options);
};

 if (isUppercase == true && isLowercase == true) {
   options = options.concat(upperCase, lowerCase)
 };

 if (isUppercase == true && isLowercase == true && isNumber == true) {
   options = options.concat(upperCase, lowerCase, number)
 };

 if (isUppercase == true && isLowercase == true && isNumber == true && isSymbol == true) [
   options = options.concat(upperCase, lowerCase, number, symbol)
 ];

 if (isUppercase == false && isLowercase == true && isNumber == true && isSymbol == true) [
   options = options.concat(lowerCase, number, symbol)
 ];

 if (isUppercase == true && isLowercase == false && isNumber == true && isSymbol == true) [
   options = options.concat(upperCase, number, symbol)
 ];

 if (isUppercase == true && isLowercase == true && isNumber == false && isSymbol == true) [
   options = options.concat(upperCase, lowerCase, symbol)
 ];

 if (isUppercase == true && isLowercase == false && isNumber == false && isSymbol == true) [
   options = options.concat(upperCase, symbol)
 ];

 if (isUppercase == false && isLowercase == true && isNumber == true && isSymbol == false) [
   options = options.concat(upperCase, lowerCase, number, symbol)
 ];


for (let i = 0; i <= length; i++) {
  var randomUpper = Math.floor(Math.random() * upperCase.length);
  password = password + upperCase.charAt(randomUpper);
  var randomLower = Math.floor(Math.random() * lowerCase.length);
  password = password + lowerCase.charAt(randomLower);
  var randomNumber = Math.floor(Math.random() * number.length);
  password = password + number.charAt(randomNumber);
  var randomSymbol = Math.floor(Math.random() * symbol.length);
  password = password + symbol.charAt(randomSymbol);
}
console.log(password);
return password;

};



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
