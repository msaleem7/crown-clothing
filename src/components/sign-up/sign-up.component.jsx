import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer } from './sign-up.styles';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userData, setData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log(displayName, email, password, 'si');
    signUpStart(displayName, email, password);

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    // await createUserProfileDocument(user, { displayName });
    // this.setState({
    //   displayName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    // });
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          onChange={handleChange}
        />

        <FormInput
          type='text'
          name='email'
          value={email}
          label='Email'
          onChange={handleChange}
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          onChange={handleChange}
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          onChange={handleChange}
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
