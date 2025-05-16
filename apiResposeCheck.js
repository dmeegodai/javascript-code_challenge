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
    missingFields, newFields
  }
}

console.log(compareApiResponses(apiV1Response, apiV2Response));
