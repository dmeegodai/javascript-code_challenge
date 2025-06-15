function findMostFrequent(arr) {
  const freqMap = new Map();
  let maxCount = 0;
  let freqValue;
  let count;
  
  for (let item of arr) {
    count = freqMap.get(item) || 0;
    count++;
    freqMap.set(item, count);

    if (count > maxCount) {
      maxCount = count;
      freqValue = item;
    }
  }
  return freqValue;
}
console.log(findMostFrequent([1, 2, 2, 3, 4, 4, 5]));
