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