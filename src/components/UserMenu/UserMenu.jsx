import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useAuth, useToggle } from 'hooks';
import { logOut } from 'redux/auth/authOperations';
import { Text, Button, List, ListItem } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  userBtnStyle,
  userBtnTextStyle,
  logOutBtnStyle,
  logOutListStyle,
} from 'components/UserMenu/UserMenuStyles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <List position="relative">
        <ListItem>
          <Button
            type="button"
            leftIcon={
              <FaUserCircle
                style={{ fill: 'white', width: '36px', height: '36px' }}
              />
            }
            rightIcon={
              isOpen ? (
                <AiFillCaretUp style={{ fill: 'white' }} />
              ) : (
                <AiFillCaretDown style={{ fill: 'white' }} />
              )
            }
            sx={userBtnStyle}
            onClick={toggle}
          >
            <Text as="span" sx={userBtnTextStyle}>
              {user.name}
            </Text>
          </Button>
          {isOpen && (
            <List
              sx={logOutListStyle}
              transform={isOpen ? 'scaleY(1)' : 'scaleY(0)'}
            >
              <ListItem>
                <Button
                  type="button"
                  onClick={() => dispatch(logOut())}
                  leftIcon={<ArrowBackIcon style={{ color: '#e3ed03' }} />}
                  sx={logOutBtnStyle}
                >
                  Logout
                </Button>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </>
  );
};
