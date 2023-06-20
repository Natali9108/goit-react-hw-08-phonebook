import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from '../../redux/auth/authOperations';
import { toast } from 'react-hot-toast';

const SignupSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().nullable().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data, evt) => {
    const { name, email, password } = data;
    console.log(name);
    dispatch(registerUser({ name, email, password }))
      .then(toast(`user ${name} registered`))
      .catch(er => console.log(er.code));
    evt.target.reset();
  };

  //   const handleSubmit = evt => {
  //     evt.preventDefault();
  //     const form = evt.target;
  //     console.log(form.elements.name.value);

  //     dispatch(
  //       register({
  //         name: form.elements.name.value,
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       })
  //     );

  //     form.reset();
  //   };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>Username</label>
    //   <input type="text" name="name" />
    //   <label>Email</label>
    //   <input type="email" name="email" />
    //   <label>Password</label>
    //   <input type="password" name="password" />
    //   <button type="submit">Register</button>
    // </form>

    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input type="text" {...register('name')} />
      <p>{errors.name?.message}</p>

      <label>Email</label>
      <input type="email" {...register('email')} />
      <p>{errors.email?.message}</p>

      <label>Password</label>
      <input type="password" {...register('password')} />
      <p>{errors.password?.message}</p>
      <button type="submit">Register</button>
    </form>
  );
};
