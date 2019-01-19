//check the length of string.
var firstName = "Chandrakant";
console.log(firstName.length);

//print the first letter of string.
var fistLetterOfFirstName = firstName[0];
console.log(fistLetterOfFirstName);

//strings are Immutable
firstName[0] = "V";
console.log(firstName);

//check first charactor of string
console.log(firstName[0]);

//check third charactor of string
console.log(firstName[2]);

//Check last charactor of string
console.log(firstName[firstName.length -1]);

//
function myData(firstName, lastName)
{
    var result = "";

    result =  ` My Name is ${firstName} ${lastName}`;

    return result;
}

var data = myData("chandrakant", "kesarkar");

console.log(data);

console.log("hi");


