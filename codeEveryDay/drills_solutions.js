/**
 * Created by lisa on 7/13/16.
 */
//Drills:
//A compilation of a variety of coding drills. Because code everyday.

// JavaScript For Loops:

var foods = ["cereal", "bagel", "oatmeal", "granola", "yogurt", "rotting meat", "pancakes"];
​
// Write a for loop that prints each food's name

​// Write a for loop that console.log's the index of the breakfast item
// I want to eat... "granola"

// Bonus: Write a for loop that removes from the array items that are longer than 6 characters.

// Bonus: Write a for loop that finds the food item that comes first alphabetically

// Bonus: Write a for loop that creates a new Array containing each food's length ie [6, 5, 7, 7, 6, 12, 8]


var dogs = ["fido", "buddie", "lassie", "beethoven", "otis", "benji", "scooby"];

// Write a while loop that prints each dog's name

// Bonus: Write a while loop that counts how many dogs have names longer than 5 characters.

// Bonus: Write a while loop that creates a new array with each name reversed

// Bonus: Write a while loop that creates a new array with only the even indexed dogs

var books =
    ["harry potter", "the golden compass", "js: the good parts", "you don't know js"];

// Write a for in loop that console.log's each book's name

​// Bonus: Write a for in loop that capitalizes each word in the book titles. ie "The Golden Compass"

​// Bonus: Write a for in loop that only returns books with "js" in the title.

var busStopTimes =
    ["8:30", "9:15", "9:30", "11:00", "11:05", "11:15", "11:30", "14:00", "15:15"];

​// Write a for of loop that console.log's each time

​// Bonus: Write a for of loop that creates a new Array of times ending with ":15"

​// Bonus: Write a for of loop that creates a new Array of times after noon

​// Bonus: Write a for of loop that creates a new Array with each hour a bus comes.

// No duplicate hours allowed.
// => [8, 9, 11, 14, 15]


//JavaScript Functions Practice:
//Define a function called sum that takes two numbers as arguments and returns their sum.
var sum = function(num1, num2){
    return num1 + num2;
};
console.log(sum(1,2));

//    Define a function called isEqual that takes two arguments and returns a boolean Return true if the two arguments are equal and return false if they are not.
var isEqual = function(num1, num2){
    if(num1 === num2){ // can also just do return arg1 === arg2. It will return true or false
        return true;
    }
    else{
        return false;
    }
};
console.log(isEqual(1,2)); //we are using console.log so we can use node to run/check it

//Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
var discountPercentage = function(orig, discount){
    var totalDiscount = (orig * (discount * 0.01));
    if((discount > 100) || (discount < 0)){
        return "Warning, discount invalid"
    }
    return "Discount is $" + totalDiscount;
};
console.log(discountPercentage(100,2));

//    Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.
var stringCapitalize = function (string) {
    var word;
    var stringArray = string.split(" ");
    var newStringArray = [ ];
    for (var i = 0; i < stringArray.length; i++) {
        word = stringArray[i].slice(1);
        firstLetter = stringArray[i][0].toUpperCase();
        var wholeWord = firstLetter + word;
        newStringArray.push(wholeWord);
    }
    var newSentence = newStringArray.join(" ");
    console.log(newSentence);
};
stringCapitalize("oh hai");

//    Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.

function evenNumbers(randInt){
    if(randInt < 0 || randInt > 100){
        return "Invalid number";
    }
    for(var i = 0; i <= randInt; i++){
        if(i % 2 === 0){
            console.log(i);
        };
    }
}
evenNumbers(2);
//    Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisible(num1, num2){
    if((num1 % num2) == 0){
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}
isDivisible(10,2);

//    Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
function oddNumbers(randInt){
    if(randInt > 100 || randInt < 0){
        console.log("invalid Entry");
        return "Invalid Entry";
    }
    if(randInt > 40){
        console.log(">40 loop");
        for(var i = 40; i <= randInt; i++){
            if([i] % 2 == 1){
                console.log(i);
            }
        }
    }
    if(randInt < 40){
        console.log("<40 loop");
        for(var i = 0; i <= 40; i++){
            if([i] % 2 == 1){
                console.log(i);
            }
        }
    }
}
oddNumbers(67);
