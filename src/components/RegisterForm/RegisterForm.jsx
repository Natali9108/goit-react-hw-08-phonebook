import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { registerUserSchema } from 'utils';
import { registerUser } from '../../redux/auth/authOperations';
import {
  Container,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { formContainerStyle } from 'styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, touchedFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = (data, evt) => {
    const { name, email, password } = data;

    dispatch(registerUser({ name, email, password }))
      .then(toast.success(`user ${name} registered`))
      .catch(er => toast.error(er.message));
    evt.target.reset();
  };

  const handleClick = () => setShow(!show);

  return (
    <Container sx={formContainerStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name?.message}>
          <FormLabel htmlFor="name">Username</FormLabel>
          <InputGroup>
            <Input
              type="text"
              {...register('name')}
              placeholder="Enter your name"
              mb={2}
            />
            <InputRightElement>
              {!isValid && touchedFields.name && (
                <CheckIcon color="green.500" />
              )}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email?.message}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup>
            <Input
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              mb={2}
            />

            <InputRightElement>
              {!isValid && touchedFields.email && (
                <CheckIcon color="green.500" />
              )}
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
          loadingText="Register..."
          colorScheme="teal"
          variant="outline"
        >
          Register
        </Button>
      </form>
    </Container>
  );
};
