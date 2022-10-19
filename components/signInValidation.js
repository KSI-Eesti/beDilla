import * as yup from 'yup';

const signInValidation = yup.object().shape({
    firstName: yup
        .string()
        .max(15, ({ max }) => `A given name must be at most ${max} characters`)
        .required(),
    lastName: yup
        .string()
        .max(20, ({ max }) => `A family name must be at most ${max} characters`)
        .required(),
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
        //password is an obligatory file, must be a string and not less than 8 characters
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .required('Password is required')
});

export default signInValidation;