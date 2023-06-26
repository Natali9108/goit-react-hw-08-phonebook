import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsPersonFillAdd } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { toast } from 'react-hot-toast';
import { addContactSchema } from 'utils';
import { ContactModal } from 'components';
import { addContact } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks';
import {
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Button,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    isSubmitting,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(addContactSchema),
  });

  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const onSubmit = data => {
    const { name, number } = data;
    const isNameExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberExist = contacts.find(contact => contact.number === number);
    if (isNameExist) {
      toast.error(`Contact '${name}' is already in contacts.`);
      return;
    }
    if (isNumberExist) {
      toast.error(`Contact with phone '${number}' is already in contacts `);
      return;
    }
    const contact = {
      name,
      number: '+380' + number,
    };
    dispatch(addContact(contact))
      .then(toast.success(`Contact '${name}' added 👏`))
      .catch(() => toast.error('Oops..., something wrong, please try again😢'));

    onClose();
  };

  useEffect(() => {
    reset({
      data: 'data',
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Button onClick={onOpen} colorScheme="facebook" variant="ghost" mb={5}>
        <BsPersonFillAdd style={{ width: '30px', height: '30px' }} />
      </Button>
      {isOpen && (
        <ContactModal isOpen={isOpen} onClose={onClose}>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name?.message}>
              <FormLabel htmlFor="name" fontSize="sm">
                Name
              </FormLabel>
              <InputGroup borderColor="#2d2727">
                <InputLeftElement>
                  <RiContactsLine style={{ fill: '#2157a5' }} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Enter name"
                  {...register('name')}
                  mb={4}
                  focusBorderColor="cyan.700"
                  fontSize="20px"
                  color="black"
                />
              </InputGroup>
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.number?.message}>
              <FormLabel htmlFor="number" fontSize="sm">
                Phone number
              </FormLabel>
              <InputGroup borderColor="#2d2727">
                <InputLeftAddon children="+380" color="white" bg="#2d2727" />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  {...register('number')}
                  mb={4}
                  focusBorderColor="cyan.700"
                  fontSize="20px"
                  color="black"
                />
              </InputGroup>

              <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              isDisabled={!isValid}
              isLoading={isSubmitting}
              loadingText="Logged in"
              colorScheme="teal"
              variant="outline"
            >
              Add contact
            </Button>
          </form>
        </ContactModal>
      )}
    </>
  );
};
