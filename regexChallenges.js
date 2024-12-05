function isValidEmail(emailAddress) {
    const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;
    if (regex.test(emailAddress)) {
        return "Valid Email"
    } else {
        return "Invalid Email"
    }
}
console.log(isValidEmail("sexybanana-3@banana-mail.co"));