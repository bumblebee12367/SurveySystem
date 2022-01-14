export default function inputErrors(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = '*Name required';
    }

    if (!values.email.trim()) {
        errors.email = '*Email required';
    }

    return errors;
}