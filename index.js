//Author: James Snell

//Declare empty arrary
var newArray = [];

//Create function, use string interpolation with message and for loop to insert names. 
function writeCards(names, event) {    
    for (var i=0; i < names.length; i++)
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    return newArray; 
}

//write while loop to decrement any number down to zero
function countDown(number) {
    while (number >=0) {
        console.log(number--)
    }
}  

