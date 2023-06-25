import { FormControl, Input } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';

export const UpdateContact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  //   const handleChange = evt => {
  //     console.log(evt);
  //     // if (evt.target.name === 'name') {
  //     //   return setUpdatedName(evt.target.value);
  //     // }
  //     // if (evt.target.name === 'number') {
  //     //   return setUpdatedNumber(evt.target.value);
  //     // }
  //   };

  const onSubmit = data => {
    const contact = {
      id: id,
      ...data,
    };
    console.log(contact);

    dispatch(updateContact(contact));
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            // onChange={handleChange}
            defaultValue={name}
            // type="text"
            // name="name"
            {...register('name')}
          ></Input>
        </FormControl>
        <FormControl>
          <Input
            defaultValue={number}
            // onChange={handleChange}
            // type="text"
            // name="number"

            {...register('number')}
          ></Input>
        </FormControl>
        <button type="submit">Update</button>
      </form>
    </>
  );
};
