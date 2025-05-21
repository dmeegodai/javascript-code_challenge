const apiV1Response = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30,
};

const apiV2Response = {
  id: 1,
  name: "John D",
  location: "NYC",
  age: 30,
};

function compareApiResponses(apiV1Response, apiV2Response) {
  const missingFields = [];
  const newFields = [];

  const v1Keys = Object.keys(apiV1Response);
  const v2Keys = Object.keys(apiV2Response);

  for (const key of v1Keys) {
    if (!v2Keys.includes(key)) {
      missingFields.push(key);
    }
  }
  for (const key of v2Keys) {
    if (!v1Keys.includes(key)) {
      newFields.push(key);
    }
  }
  return {
    missingFields,
    newFields,
  };
}

//console.log(compareApiResponses(apiV1Response, apiV2Response));

const apiV1 = {
  id: 101,
  name: "Smartphone",
  price: 299.99,
  description: "Latest model with 5G",
};

const apiV2 = {
  id: 101,
  name: "Smartphone",
  price: 300.02,
  description: "Latest model with 5G and AI features",
  stock: 50,
};

function compareApiResponses(apiV1, apiV2) {
  const finalResults = {
    missingFields: [],
    newFields: [],
    valueMismatches: [],
  };
  const v1Keys = Object.keys(apiV1);
  const v2Keys = Object.keys(apiV2);

  for (const key of v1Keys) {
    if (!v2Keys.includes(key)) {
      finalResults.missingFields.push(key);
    }
  }
  for (const key of v2Keys) {
    if (!v1Keys.includes(key)) {
      finalResults.newFields.push(key);
    }
  }
  for (const key of v1Keys) {
    if (v2Keys.includes(key)) {
      const v1Value = apiV1[key];
      const v2Value = apiV2[key];

      if (typeof v1Value === "number" && typeof v2Value === "number") {
        if (Math.abs(v1Value - v2Value) > 0.01) {
          finalResults.valueMismatches.push({
            key,
            apiV1: v1Value,
            apiV2: v2Value,
          });
        }
      }
      if (typeof v1Value === "string" && typeof v2Value === "string") {
        if (v1Value !== v2Value) {
          finalResults.valueMismatches.push({
            key,
            apiV1: v1Value,
            apiV2: v2Value,
          });
        }
      }
    }
  }
  return finalResults;
}
console.log(compareApiResponses(apiV1,apiV2));