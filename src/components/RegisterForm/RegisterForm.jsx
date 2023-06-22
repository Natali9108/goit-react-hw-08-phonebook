import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { registerUserSchema } from 'utils';
import { registerUser } from '../../redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = (data, evt) => {
    const { name, email, password } = data;

    dispatch(registerUser({ name, email, password }))
      .then(toast.success(`user ${name} registered`))
      .catch(er => toast.error(er.message));
    evt.target.reset();
  };

  return (
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

      <button type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
};
