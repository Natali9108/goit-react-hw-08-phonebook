import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toast } from 'react-hot-toast';
import { padaddLeadingZero } from 'utils';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button, Icon, ListItem, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { UpdateContact } from 'components/UpdateContact/UpdateContact';

export const ContactsItem = ({ index, id, name, number }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleRemoveContact = () => {
    dispatch(deleteContact(id))
      .then(toast.success(`Contact '${name}' deleted `))
      .catch(er => toast.error(er.message));
  };

  const handleUpdateContact = () => {
    setShow(true);
    // dispatch(updateContact(id));
  };

  return (
    <>
      <ListItem
        paddingLeft={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        border="1px"
        borderRadius="3xl"
        overflow="hidden"
      >
        <Text fontSize="sm" fontWeight="semibold" letterSpacing="0.01em">
          {padaddLeadingZero(index + 1)}. {name}: {number}
        </Text>
        <Button
          onClick={() => handleRemoveContact()}
          bg="#b6c0cf"
          border="none"
        >
          <Icon
            as={DeleteIcon}
            boxSize={5}
            focusable={true}
            _hover={{ color: 'white', transform: 'scale(1.3)' }}
          />
        </Button>
        <Button onClick={() => handleUpdateContact()}>Update</Button>
      </ListItem>
      {show && <UpdateContact name={name} number={number} id={id} />}
    </>
  );
};

ContactsItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};
