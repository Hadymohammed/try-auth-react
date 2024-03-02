export default function EmailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}