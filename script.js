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
// const input1 = prompt1;
console.log(prompt1);

/*account for other responses */
prompt2 = prompt("How many characters would you like your password to be? (Enter number between 8-128)");
// const input2 = prompt2;
  if (prompt2 < 8) {
    alert("Must be > or equal to 8");
    generatePassword();
  } else if (prompt2 > 128) {
    alert("Must be less than 128");
    generatePassword();
  } else {
    console.log(prompt2);
  };

prompt3 = confirm("Include character types?");
// const input3 = prompt3;
console.log(prompt3)

prompt4 = confirm("Include uppercase characters?");
// const input4 = prompt4;
  if (prompt4 == true) {
    options = options.concat(upperCase)
  }
console.log(options);

prompt5 = confirm("Include lowercase characters?");
if (prompt5 == true) {
  options = options.concat(lowerCase)
}
console.log(options);

prompt6 = confirm("Include numbers? (yes/no)");
// const input6 = prompt6;
if (prompt6 == true) {
  options = options.concat(number)
}
console.log(options);

prompt7 = confirm("Include special characters? (yes/no)");
// const input7 = prompt7;
if (prompt7 == true) {
  options = options.concat(symbol)
}
console.log(options);

for (let i = 0; i <= prompt2; i++) {
  var randomUpper = Math.floor(Math.random() * upperCase.length);
  password = password + upperCase.charAt(randomUpper);
  // password = options.concat(upperCase, lowerCase, number, symbol);
}
console.log(password);
return password;
};



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
