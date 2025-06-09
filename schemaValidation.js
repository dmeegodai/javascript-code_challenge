const expectedSchema = {
  id: "number",
  name: "string",
  isActive: "boolean",
  tags: "array",
  metadata: {
    createdAt: "string",
    updatedAt: "string"
  }
};

const actualResponse = {
  id: 123,
  name: "Sample Product",
  isActive: true,
  tags: ["featured", "qa"],
  metadata: {
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z"
  }
};

function validateSchema(expectedSchema, actualResponse){
    const issue = [];
    const eKeys = Object.keys(expectedSchema);
    const aKeys = Object.keys(actualResponse);

    for(const key of eKeys) {
        if(aKeys.includes(key)){

        } else {
            
        }
    }

}