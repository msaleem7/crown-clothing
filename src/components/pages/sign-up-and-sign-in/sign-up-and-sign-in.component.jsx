import React from 'react';
import './sign-up-and-sign-in.style.scss';
import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';

const SignUpAndSignIn = () => (
  <div className='sign-up-and-sign-in'>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignUpAndSignIn;
