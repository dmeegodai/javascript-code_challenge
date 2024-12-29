function reverseArray(arr) {
    const newArray = [];

    for(let i = arr.length-1; i >=0; i--){
        newArray.push(arr[i]);
    }

    return newArray;

}

//console.log(reverseArray([1,2,3,4,5]));


function reverseNameArray(nameArray){

    const nameReversedArray = [];
    for(let i = nameArray.length -1; i >= 0; i--){
        nameReversedArray.push(nameArray[i]);
    };

    return nameReversedArray;
}

//console.log(reverseNameArray(["Namal", "Kamal", "Amal", "Randika"]));

function removeDup(arr){
    const latestArray = [];
    for(let i = 0; i < arr.length; i++){
        if (!latestArray.includes(arr[i])){
            latestArray.push(arr[i]);
        }
    };
    return latestArray
}

//console.log(removeDup([1,2,2,3,4,5,3,6]));
//console.log(removeDup(["A","A","B","B","C"]));


function greatestValue(arr){

    let greatValue = -Infinity;

    for(let i =0; i < arr.length; i++) {
        if(arr[i] > greatValue){
             greatValue =  arr[i];
        } 
    }
    return greatValue;
}
//console.log(greatestValue([1,2,2,3,4,5,3,6]));


function createMultiplier(n){
    let number = n;
    function secondFuncion(y){

        let finalValue = number * y;
        return finalValue;
    }
    return secondFuncion;

}
//const createMultiplier2 = createMultiplier(2);
//console.log(createMultiplier2.secondFuncion(5));



// This is the code that I completed in Greentube 1st technical interview
function reverseAction(arr) {
    const newArry = [];
    for(let i =arr.length-1; i >= 0; i--){
        newArry[0] = arr[i];
        newArray.push(arr[i]);
    }
    return newArry;     
    arr[0] =5;   
}
//new Arry [0]= 3;