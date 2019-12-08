
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var allArray = [];
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
// function generatePassword() {
//     //YOUR CODE HERE
//     alert("ive been clicked");
//     return "password";
// }
function generatePassword() {
    var password = [];
    // TODO: Ask user for password length
    // Isolating what letters and characters are wanted in password generation
    var wantUpper = confirm("Do you want upper case letters?");
    if (wantUpper === true) {
        // push characters to allArray
        allArray.push(...uppercase);
        alert("Ok, We will use upper case letters")
    }
    else { alert("Ok, we will exclude upper case Letters") }
    var wantLower = confirm("Do you want lower case letters?");
    if (wantLower === true) {
        // push characters to allArray
        allArray.push(...lowercase);
        alert("Ok, We will use lower case Letters")
    }
    else { alert("Ok, we will exclude lower case Letters") }
    var wantNumbers = confirm("Do you want numbers?");
    if (wantNumbers === true) {
        // push characters to allArray
        allArray.push(...numbers);
        alert("Ok, We will use numbers")
    }
    else { alert("Ok, we will exclude numbers") }
    var wantCharacters = confirm("Do you want to use characters?");
    if (wantCharacters === true) {
        // push characters to allArray
        allArray.push(...symbols);
        alert("Ok, We will use characters")
    }
    else { alert("Ok, we will exclude characters") }
    // ***currently using 15 as the password length***
    for (var index = 0; index < 15; index++) {
        var character = Math.floor(Math.random() * allArray.length);
        password.push(character);
        console.log(allArray);
    }
    
    // return the password
    return password.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER