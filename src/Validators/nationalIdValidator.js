export default function NationalIdValidator(nationalId) {
    const re = /^\d{14}$/;
    return re.test(nationalId);
}