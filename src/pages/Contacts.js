import { ContactForm, Loader, Filter, ContactList } from 'components';
import {
  Container,
  PhonebookTitle,
  ContactsTitle,
} from 'components/App/App.styled';
import { useContacts } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, error, isLoading } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      {error && <p>{error.message}</p>}
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Add your contacts to the phonebook</p>
      )}
    </Container>
  );
};

export default Contacts;
