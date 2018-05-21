import React from 'react';
import { Provider } from 'react-redux'
import { init } from '@rematch/core';
import * as models from './models/index';
import LoginScreen from './screens/login'

const store = init({
    models
});

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <LoginScreen />
        </Provider>
    );
  }
}
