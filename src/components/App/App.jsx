import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Loader } from 'components/Loader/Loader';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { AppBar } from 'components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { refreshUser } from 'redux/auth/authOperations';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
      {/* <AppBar />
      <Container>
        <RegisterForm />
        <LoginForm /> */}
      {/* <PhonebookTitle>Phonebook</PhonebookTitle>
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
      )} */}
      {/* <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: '18px',
            },
          }}
        />
      </Container> */}
    </>
  );
};
