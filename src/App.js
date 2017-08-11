import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import LoginForm from './components/LoginForm'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBd09NJFA7q7MNp_qy6bjZU18EkAFnxEDU",
      authDomain: "react-native-manager-53da8.firebaseapp.com",
      databaseURL: "https://react-native-manager-53da8.firebaseio.com",
      projectId: "react-native-manager-53da8",
      storageBucket: "",
      messagingSenderId: "630505049726"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

