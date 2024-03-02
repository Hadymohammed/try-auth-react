export default function PasswordValidator(password) {
    // Password must be at least 8 characters long, contain at least one digit
    let re = /^(?=.*\d).{8,}$/;
    return re.test(password);
}