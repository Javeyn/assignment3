// all of the letters numbers and characters for password generation
var allArray = [];
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
// generating passwords based on selection
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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if (wantUpper === true && wantLower === true && wantNumbers === true && wantCharacters === true) {
//     function generate(length = 12) {
//         // combining all different arrays into one
//         // allArray = uppercase + lowercase + numbers + symbols;
//         password = '';
//         for (var index = 0; index < length; index++) {
//             var characterIndex = Math.floor(Math.random() * all.length);
//             password.push(allArray[characterIndex]);
//         }
//         console.log(password);
//     }
// }
// else if (wantUpper === true && wantLower === true && wantNumbers === true && wantCharacters === false) {
//     function generate(length = 12) {
//         var all = uppercase + lowercase + numbers;
//         var password = '';
//         for (var index = 0; index < length; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         console.log(password);
//     }
// }
// else if (wantUpper === true && wantLower === true && wantNumbers === false && wantCharacters === false) {
//     function generate(length = 12) {
//         var all = uppercase + lowercase;
//         var password = '';
//         for (var index = 0; index < length; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         console.log(password);
//     }
// }
// else (wantUpper === true && wantLower === true && wantNumbers === false && wantCharacters === false)
// {
//     function generate(length = 12) {
//         var all = uppercase + lowercase;
//         var password = '';
//         for (var index = 0; index < length; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
//         }
//         console.log(password);
//     }
// }