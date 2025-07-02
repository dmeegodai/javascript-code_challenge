const input = ["TC-1234", "tc-5678", "TC-ABCD", "TC-0456", "TC1234", "TC-789"];
function validateSingleID(testCaseId){
    const regex = /^TC-\d{4}$/;
    return regex.test(testCaseId);
}

const output =  input.filter(validateSingleID);
console.log(output);