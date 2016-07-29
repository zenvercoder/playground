/**
 * Created by lisa on 7/28/16.
 */

//iterate through string
//array for backwards string
//function isPalindrome
//var newArr = [];

function reverseString(s){
    splitt = s.split(' ');
    console.log("splitt= ", splitt)

    reversed = splitt.reverse();
    console.log("reversed= ", reversed)
    s = s.split('').reverse().join('');
    //console.log("string reverse= ", s);
    if(s === s.split('').reverse().join('')){
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}

//removed punctuation with regex a-z and not it

//str.replace()
//lowercase w = word. anything that's not a word'



reverseString("race car");
//reverseString("step on no pets");
//reverseString("race cat");
//reverseString("racecat");
reverseString("race cat");





