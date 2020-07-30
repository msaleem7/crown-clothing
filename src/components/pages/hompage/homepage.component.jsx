import React from 'react';
import Directory from '../../directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = ({ match }) => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
