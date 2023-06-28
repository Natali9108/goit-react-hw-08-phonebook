import { Box, Container, Heading } from '@chakra-ui/react';
import { ContactForm, Loader, Filter, ContactList } from 'components';
// import {
//   Container,
//   PhonebookTitle,
//   ContactsTitle,
// } from 'components/App/App.styled';
import { useContacts } from 'hooks';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, error, isLoading } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() =>
        toast.error('Opps, something went wrong, please, try again later')
      );
  }, [dispatch]);

  return (
    <Container padding={5} textAlign="center" maxWidth="80ch">
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      {error && <p>{error.message}</p>}
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <Box
          padding={4}
          border="1px solid"
          borderColor="black"
          borderRadius={8}
        >
          <Filter />
          <ContactList />
        </Box>
      ) : (
        <p>Add your contacts to the phonebook</p>
      )}
    </Container>
  );
};

export default Contacts;
