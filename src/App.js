import React from 'react';
import {GetStarted, Splash} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './roter';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
