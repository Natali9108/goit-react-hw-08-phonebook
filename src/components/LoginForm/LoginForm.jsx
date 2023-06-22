import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { loginUserSchema } from 'utils';
import { logIn } from '../../redux/auth/authOperations';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginUserSchema),
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (data, evt) => {
    const { email, password } = data;

    dispatch(logIn({ email, password }))
      .then()
      .catch(er => toast.er(er.message));
    evt.target.reset();
  };

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        {...register('email')}
        id="email"
        // placeholder="medium size"

        width="auto"
      />
      {/* <FormHelperText>{errors.email?.message}</FormHelperText> */}
      {errors.email && (
        <FormErrorMessage>{errors.email.message}</FormErrorMessage>
      )}
      <FormLabel>Password</FormLabel>
      {/* <Input
        type="password"
        {...register('password')}
        // placeholder="medium size"
        htmlSize={20}
        width="auto"
      />
      <FormErrorMessage>{errors.password?.message}</FormErrorMessage> */}
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          {...register('password')}
          placeholder="Enter password"
          id="password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button type="submit" disabled={!isValid}>
        Log in
      </Button>
    </FormControl>
  );
};
