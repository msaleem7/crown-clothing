import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';
import { SignUpAndSignInContainer } from './sign-up-and-sign-in.styles';

const SignUpAndSignIn = () => (
  <SignUpAndSignInContainer>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </SignUpAndSignInContainer>
);

export default SignUpAndSignIn;
