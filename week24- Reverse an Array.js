function reverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}

console.log(reverseArray([1, 2, 3, 4]));

function reverseArrayTwo(arr) {
  let reverseArrayT = [];
  for (item of arr) {
    reverseArrayT.unshift(item);
  }
  return reverseArrayT;
}

console.log(reverseArrayTwo([11, 22, 33, 44]));

function reverseArrayThree(arr) {
  let reverseArray = arr.reverse();
  return reverseArray;
}

console.log(reverseArrayThree(["A", "Z", "E", "C"]));
