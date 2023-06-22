import React from 'react';
import PropTypes from 'prop-types';
// import { IconBtn } from './BottonIcon.styled';

export const ButtonIcon = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

ButtonIcon.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
