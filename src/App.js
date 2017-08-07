import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

const store = createStore(reducers);

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
        <View>
          <Text>Hello World!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;

