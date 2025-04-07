// Email validation
function isValidEmail(emailAddress) {
    const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;
    if (regex.test(emailAddress)) {
        return "Valid Email"
    } else {
        return "Invalid Email"
    }
}
//console.log(isValidEmail("sexybanana-5@banana-mail.co"));

// Phone nummer validation
function isValidPhoneNummer(nummer){
    const regex = /^(\+?[0-9]{1,3})?[ -]?([0-9]{3})[ -]?([0-9]{3})[ -]?([0-9]{3})$/
    if(regex.test(nummer)){
        return "Valid Telefonnummer";
    } else {
        return "Invalid Telefonenummer";
    }
}
//console.log(isValidPhoneNummer("+94-772-212-625"))

function isValidTestCaseId(testId) {
    const regex = /^TC-\d{3,5}(-\d{1,2})?$/
    if(regex.test(testId)) {
        return true;
    } else {
        return false;
    }
}
console.log( isValidTestCaseId("TC-99999-02"));