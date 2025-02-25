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
arr = [1,2,2,4,5,1,2,5,5];
console.log(returnMostFrequentValue(arr));