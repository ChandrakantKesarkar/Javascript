var ourArray = ["chandu",13];

console.log(ourArray);

//Nested array
var nestedArray = [["chandu",13],["vaibhav",26]];
console.log(nestedArray);

//Call array value with index

var myArray = [10,20,30];

var myData = myArray[0];

console.log(myData);

var nestedArrayWithIndex = nestedArray[0];
var myfirstNestedVal = nestedArrayWithIndex[0];

console.log(myfirstNestedVal);

//modify array value

var modifiedArray = [10,20,30];
modifiedArray[2] = 40;

console.log(modifiedArray);

//Value of multi dimentional array

var sampleArray = [[1,2,3],[4,5,6],[7,8,9],13,14];

var mySampleData = sampleArray[2][1];

var mySampleData1 = sampleArray[3]

console.log(mySampleData1);

// Push Array
var pushArray = ["chandu","vaibhav","prasad"];
pushArray.push("rama");

console.log(pushArray);

var pushInMultiDimentionalArray = [["rama","chandu"],["santu","vishal"]];
pushInMultiDimentionalArray.push(["sachin","sadaba"]);

console.log(pushInMultiDimentionalArray);

//Pop element from array

var popArray = [10,20,30];
var popedElement = popArray.pop();

console.log(popArray);
console.log(popedElement);

var popMultiArray = [["vaibhav","wipro"],["chandu","Ecotech"]];
popedElement = popMultiArray[1].pop();
console.log(popMultiArray);
console.log(popedElement);

popedElement = popMultiArray.pop();
console.log(popMultiArray);
console.log(popedElement);
console.log("----------------------------------------");

//use of shift

var shiftArray = ["chandu","vaibhav"];
var removedFistElement = shiftArray.shift();

console.log(shiftArray);
console.log(removedFistElement);

shiftArray.push("Raja");
console.log(shiftArray);






