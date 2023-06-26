import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toast } from 'react-hot-toast';
import { padaddLeadingZero } from 'utils';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  Box,
  Button,
  Collapse,
  Icon,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FaRegEdit } from 'react-icons/fa';
import { UpdateContact } from 'components';

export const ContactsItem = ({ index, id, name, number }) => {
  const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure();

  const handleRemoveContact = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(({ name }) => toast.success(`Contact '${name}' deleted `))
      .catch(() =>
        toast.error('Oops, something went wrong, please, try again')
      );
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
        <Box bg="#b6c0cf">
          <Button onClick={handleRemoveContact} border="none" padding={0}>
            <Icon
              as={DeleteIcon}
              boxSize={5}
              focusable={true}
              _hover={{ color: 'white', transform: 'scale(1.3)' }}
            />
          </Button>
          <Button
            onClick={onToggle}
            border="none"
            padding={0}
            _hover={{ color: 'white', transform: 'scale(1.3)' }}
          >
            <FaRegEdit />
          </Button>
        </Box>
      </ListItem>
      <Collapse in={isOpen} animateOpacity>
        <UpdateContact
          name={name}
          number={number}
          id={id}
          onToggle={onToggle}
        />
      </Collapse>
    </>
  );
};

ContactsItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};
