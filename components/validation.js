import * as yuppy from 'yup';

const loginValidationSchema = yuppy.object().shape({
    //email is supposed to be as string and is an obligatory field in Login
    email: yuppy
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
      //password is an obligatory file, must be a string and not less than 8 characters
    password: yuppy
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  export default loginValidationSchema;