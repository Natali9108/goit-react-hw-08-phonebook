import * as yup from 'yup';

const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regexNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const addContactSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        regexName,
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required(),
    number: yup
      .string()
      .matches(
        regexNumber,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  })
  .required();

export const registerUserSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().nullable().email().required(),
    password: yup.string().min(8).max(16).required(),
  })
  .required();

export const loginUserSchema = yup
  .object()
  .shape({
    email: yup.string().nullable().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
