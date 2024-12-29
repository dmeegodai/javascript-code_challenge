function reverse(string){
    let reversedString = ""; //This is a varaible that assigned to initial empty value
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]; // Concatination what we call it here, it adds current charactor to the existing value
    } // Important fact here :  You can access each character in a string using 'index notation (string[i])' 
    return reversedString;     
}

//console.log(reverse("Bogdan"))
// Remember to have a look on variable types in JS - var, let , const and their usage in different scope level

function reverseFunction(string) {

    let splitChar = string.split(""); // Split the string in a array of individual characters
    let reversedChar = splitChar.reverse();
    let reverseString = reversedChar.join(""); // Joins array elements back into a single string
    let reverseStringTwo = string.split("").reverse().join("");
    //return  reverseString;
    return  reverseStringTwo;
}

//console.log(reverseFunction("Bio-Oil"));














