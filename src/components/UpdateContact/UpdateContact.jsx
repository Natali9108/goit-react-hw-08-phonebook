import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  updateContact,
} from 'redux/contacts/contactsOperations';
import { addContactSchema } from 'utils';

export const UpdateContact = ({ name, number, id, onToggle }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(addContactSchema),
  });

  const onSubmit = data => {
    dispatch(updateContact({ id, newContact: data }))
      .unwrap()
      .then(({ data }) => {
        toast.success(`Contact ${data.name} was update`);
        dispatch(fetchContacts());
      })
      .catch(() =>
        toast.error('Oops, something went wrong, please, try again')
      );

    onToggle();
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name?.message}>
          <Input
            type="text"
            defaultValue={name}
            {...register('name')}
            mb={1}
            borderRadius="3xl"
            focusBorderColor="cyan.700"
          ></Input>
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.number?.message}>
          <FormLabel>
            <Input
              type="tel"
              defaultValue={number}
              {...register('number')}
              mb={2}
              borderRadius="3xl"
              focusBorderColor="cyan.700"
            ></Input>
          </FormLabel>
          <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          mb={4}
          isDisabled={!isValid || !isDirty}
          isLoading={isSubmitting}
          loadingText="Is edited..."
          colorScheme="teal"
          variant="outline"
        >
          Edit
        </Button>
      </form>
    </>
  );
};
