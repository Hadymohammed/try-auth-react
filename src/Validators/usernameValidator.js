import EmailValidator from "./emailValidator";
import NationalIdValidator from "./nationalIdValidator";

export default function UsernameValidator(username) {
    return EmailValidator(username)||NationalIdValidator(username);
}