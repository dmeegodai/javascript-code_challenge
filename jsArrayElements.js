function returnMostFrequentValue(arr) {
  let mapRecords = new Map();
  let maxFreq = 0;
  let mostFrequent = [];

  for (num of arr) {
    mapRecords.set(num, (mapRecords.get(num) || 0) + 1);
    if (mapRecords.get(num) > maxFreq) {
      maxFreq = mapRecords.get(num);
      mostFrequent = [];
      mostFrequent.push(num);
    } else if (mapRecords.get(num) === maxFreq) {
      mostFrequent.push(num);
    }
  }
  return mostFrequent;
}
arr = [1, 2, 2, 4, 5, 1, 2, 5, 5];
//console.log(returnMostFrequentValue(arr));

function arrayConvert(arr) {
  let flattedArray = [];
  flattedArray = arr.flat(Infinity);
  return flattedArray;
}
//console.log(arrayConvert([1, 2, [3, 4], [5, [6, 7]]]));

function arrayConvertNew(arr) {
  let flattedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      flattedArray.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      let elements = arrayConvertNew(arr[i]);
    flattedArray.push(...elements);
    }
  }
  return flattedArray;
}

console.log(arrayConvert([1, 2, [3, 4], [5, [6, 7]]]));
