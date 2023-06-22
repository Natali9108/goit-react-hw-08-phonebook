import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsPersonFillAdd } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { addContactSchema } from 'utils';
import { ButtonIcon, Modal } from 'components';
import { addContact } from 'redux/contacts/contactsOperations';
import { useContacts, useToggle } from 'hooks';
// import {
//   PhonebookForm,
//   Label,
//   Input,
//   AddBtn,
//   ErrorDescription,
// } from './ContactForm.styled';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(addContactSchema),
  });

  const { isOpen, toggle } = useToggle();
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const onSubmit = (data, evt) => {
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
      number,
    };
    dispatch(addContact(contact))
      .then(toast.success(`Contact '${name}' added 👏`))
      .catch(er => toast.error(er.message));
    evt.target.reset();
    toggle();
  };

  return (
    <>
      <ButtonIcon onClick={toggle}>
        <BsPersonFillAdd />
      </ButtonIcon>
      {isOpen && (
        <Modal onClose={toggle}>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name"> Name</label>
            <input type="text" {...register('name')} />
            <p>{errors.name?.message}</p>
            <label htmlFor="number"> Number</label>
            <input type="tel" {...register('number')} />
            <p>{errors.number?.message}</p>
            <button type="submit" disabled={!isValid}>
              Add contact
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
