import * as yup from 'yup';

const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regexNumber =
  /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;

export const addContactSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        regexName,
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required('This field is required'),
    number: yup
      .string()
      .matches(
        regexNumber,
        'Please enter your phone number in the following format: [+country code] [city code] [phone number].'
      )
      .required('This field is required'),
  })
  .required();

export const registerUserSchema = yup
  .object()
  .shape({
    name: yup.string().required('This field is required'),
    email: yup.string().nullable().email().required('This field is required'),
    password: yup.string().min(8).max(16).required('This field is required'),
  })
  .required();

export const loginUserSchema = yup
  .object()
  .shape({
    email: yup.string().nullable().email().required('This field is required'),
    password: yup.string().min(8).required('This field is required'),
  })
  .required();
