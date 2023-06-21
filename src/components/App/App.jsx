import { lazy } from 'react';
// import { Toaster } from 'react-hot-toast';
// import ContactForm from '../ContactForm';
// import Filter from '../Filter';
// import ContactList from '../ContactList';
// import { Loader } from 'components/Loader/Loader';
// import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { useDispatch } from 'react-redux';
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/selectors';
import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/contactsOperations';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import { AppBar } from 'components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { Layout, PrivateRoute, RestrictedRoute } from 'components';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
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
    )
  );
};
