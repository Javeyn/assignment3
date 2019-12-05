// all of the letters numbers and characters for password generation
var allArray = [];
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var count = 8


TODO: "fix countConfirm prompt to take numbers only"
TODO: "have countConfirm replace var COUNT with user input"
TODO: "GENERATE PASSWORD!!!!!"


// index 3 is the page to load this. start labeling your pages better jack.


// Isolating what letters and characters are wanted in password generation
// this code doesnt have errors, but is not working correctly. the while loop
// is not doing its function. i think i need to isolate the input as a number and then go
// against that.

var countConfirm = prompt("Choose a password length between 4 and 16");
var numInput = parseInt(countConfirm, 10);

while (countConfirm < 4 && countConfirm > 16 === true) {
    alert("You must choose a number between 4 and 16")
    console.log(countConfirm)

// else (countConfirm > 4 && countConfirm < 16) {
if (countConfirm >4 && countConfirm < 16) {
    alert("Good Job jack");
    break;
}
}
var wantUpper = confirm("Do you want upper case letters?");
if (wantUpper === true) {
    allArray.push(uppercase);
    alert("Ok, We will use upper case letters")
}
else { alert("Ok, we will exclude upper case Letters") }

var wantLower = confirm("Do you want lower case letters?");
if (wantLower === true) {
    allArray.push(lowercase);
    alert("Ok, We will use lower case Letters")
}
else { alert("Ok, we will exclude lower case Letters") }

var wantNumbers = confirm("Do you want numbers?");
if (wantNumbers === true) {
    allArray.push(numbers);
    alert("Ok, We will use numbers")
}
else { alert("Ok, we will exclude numbers") }

var wantCharacters = confirm("Do you want to use characters?");
if (wantCharacters === true) {
    allArray.push(symbols);
    alert("Ok, We will use characters")
}
else { alert("Ok, we will exclude characters") }

console.log(allArray);

// function generatePassword 





// generating passwords based on selection

// if (wantUpper === true && wantLower === true && wantNumbers === true && wantCharacters === true) {
//     function generate(length = 12) {


//         var all = uppercase + lowercase + numbers + symbols;

//         var password = '';

//         for (var index = 0; index < length; index++) {
//             var character = Math.floor(Math.random() * all.length);
//             password += all.substring(character, character + 1);
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