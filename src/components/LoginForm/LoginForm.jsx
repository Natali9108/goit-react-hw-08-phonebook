import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { loginUserSchema } from 'utils';
import { logIn } from '../../redux/auth/authOperations';
import {
  Container,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { formContainerStyle } from 'styles';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors, isValid, touchedFields, isValidating, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginUserSchema),
  });

  const onSubmit = (data, evt) => {
    const { email, password } = data;

    dispatch(logIn({ email, password }))
      .then()
      .catch(er => toast.er(er.message));
    evt.target.reset();
  };

  const handleClick = () => setShow(!show);

  return (
    <Container sx={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email?.message}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup>
            <Input
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              mb={5}
            />
            <InputRightElement>
              <EmailIcon />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password?.message}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              {...register('password')}
              placeholder="Enter password"
              mb={5}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          isDisabled={!isValid}
          isLoading={isSubmitting}
          loadingText="Logged in"
          colorScheme="teal"
          variant="outline"
        >
          Log in
        </Button>
      </form>
    </Container>
  );
};
