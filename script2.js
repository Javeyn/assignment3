// all of the letters numbers and characters for password generation

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

// Isolating what letters and characters are wanted in password generation
var wantUpper = confirm("Do you want upper case letters?");
if (wantUpper === true) {
    alert("Ok, We will use upper case letters")
}
else { alert("Ok, we will exclude upper case Letters") }

var wantLower = confirm("Do you want lower case letters?");
if (wantLower === true) {
    alert("Ok, We will use lower case Letters")
}
else { alert("Ok, we will exclude lower case Letters") }

var wantNumbers = confirm("Do you want numbers?");
if (wantNumbers === true) {
    alert("Ok, We will use numbers")
}
else { alert("Ok, we will exclude numbers") }

var wantCharacters = confirm("Do you want to use characters?");
if (wantCharacters === true) {
    alert("Ok, We will use characters")
}
else { alert("Ok, we will exclude characters") }

// generating passwords based on selection

if (wantUpper === true && wantLower === true && wantNumbers === true && wantCharacters === true) {
    function generate(length = 12) {


        var all = uppercase + lowercase + numbers + symbols;

        var password = '';

        for (var index = 0; index < length; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }

        console.log(password);
    }

}

else if (wantUpper === true && wantLower === true && wantNumbers === true && wantCharacters === false) {
    function generate(length = 12) {


        var all = uppercase + lowercase + numbers;

        var password = '';

        for (var index = 0; index < length; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }

        console.log(password);
    }

}
else if (wantUpper === true && wantLower === true && wantNumbers === false && wantCharacters === false) {
    function generate(length = 12) {


        var all = uppercase + lowercase;

        var password = '';

        for (var index = 0; index < length; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }

        console.log(password);
    }

}
else (wantUpper === true && wantLower === true && wantNumbers === false && wantCharacters === false)
{
    function generate(length = 12) {


        var all = uppercase + lowercase;

        var password = '';

        for (var index = 0; index < length; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }

        console.log(password);
    }

}