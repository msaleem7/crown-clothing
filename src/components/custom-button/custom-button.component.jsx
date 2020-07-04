import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherButtonProps
}) => (
  <button
    className={`${inverted ? 'inverteed' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
