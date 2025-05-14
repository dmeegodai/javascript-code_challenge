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

//console.log(arrayConvert([1, 2, [3, 4], [5, [6, 7]]]));

function findDuplicates(arr) {
  let counts = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (counts.has(arr[i])) {
      counts.set(arr[i], counts.get(arr[i]) + 1);
    } else {
      counts.set(arr[i], 1);
    }
  }
  for (let [key, value] of counts) {
    if (value > 1) {
      result.push(key);
    }
  }
  return result;
}

//console.log(findDuplicates([2,1,3,2,3,2,4,5,6,3,5]));

function countStatusCodes(arr) {
  let counts = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (counts.has(arr[i])) {
      counts.set(arr[i], counts.get(arr[i]) + 1);
    } else {
      counts.set(arr[i], 1);
    }
  }
  return counts;
}
//console.log(countStatusCodes([200, 200, 404, 500, 200, 401, 500, 404, 200]));

function getFailures(arr) {
  //let count = new Map();
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 400) {
      results.push(arr[i]);
    }
  }
  return results;
}
//console.log(getFailures([200, 201, 404, 500, 502]));

function indFirstFailure(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= 400) {
      return arr[i];
    }
  }
  return "No failure found";
}

//console.log(indFirstFailure([200, 201, 404, 500, 502]));
//console.log(indFirstFailure([200, 201, 202]));

const products = [
  { id: 1, title: "Smartphone", price: 599, rating: 4.5 },
  { id: 2, title: "", price: 399, rating: 3.8 },
  { id: 3, title: "Laptop", price: -1500, rating: 4.0 },
  { id: 4, title: "Camera", price: 799, rating: 6.2 },
  { id: 5, title: "Headphones", price: 99, rating: 4.2 },
];

function apiDataValidate(arr) {
  let result = [];
  for (const arrElement of arr) {
    if (
      arrElement.price < 0 ||
      !arrElement.title ||
      arrElement.rating < 0 ||
      arrElement.rating > 5
    ) {
      result.push(arrElement.id);
    }
  }
  return result;
}

//console.log(apiDataValidate(products));

const users = [
  { id: 1, name: "John", roles: [{ roleName: "Admin", accessLevel: 10 }] },
  { id: 2, name: "", roles: [{ roleName: "Editor", accessLevel: 5 }] },
  { id: 3, name: "Alice", roles: [] },
  { id: 4, name: "Bob", roles: [{ roleName: "", accessLevel: 7 }] },
  { id: 5, name: "Eve", roles: [{ roleName: "Viewer", accessLevel: 15 }] },
];

function validateUsers(users) {
  let results = [];
  for (userElement of users) {
    const { id, name, roles } = userElement;
    if (!name || roles.length === 0) {
      results.push(id);
      continue;
    }
    for (roleElements of roles) {
      const { roleName, accessLevel } = roleElements;
      if (!roleName || accessLevel < 1 || accessLevel > 10) {
        results.push(id);
        break;
      }
    }
  }
  return results;
}
console.log(validateUsers(users));
