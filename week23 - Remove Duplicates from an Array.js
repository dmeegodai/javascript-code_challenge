function removeDuplicates(arr) {
  let newArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function findMax(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArray.length === 0) {
      newArray.push(arr[i]);
    } else if (arr[i] > newArray[0]) {
      newArray = [arr[i]];
    } else if (arr[i] === newArray[0]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function findMaxE(arr){
  let max =  arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  } return max;
}
