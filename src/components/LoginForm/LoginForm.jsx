import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { logIn } from '../../redux/auth/authOperations';
import { toast } from 'react-hot-toast';

const SignupSchema = yup
  .object()
  .shape({
    email: yup.string().nullable().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data, evt) => {
    const { email, password } = data;

    dispatch(logIn({ email, password }))
      .then()
      .catch(er => console.log(er.code));
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="email" {...register('email')} />
      <p>{errors.email?.message}</p>

      <label>Password</label>
      <input type="password" {...register('password')} />
      <p>{errors.password?.message}</p>
      <button type="submit">Log in</button>
    </form>
  );
};
