import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSWxiKda8vMKDHJtmO3YGySMam-2gec4o',
      authDomain: 'auth-83b55.firebaseapp.com',
      databaseURL: 'https://auth-83b55.firebaseio.com',
      projectId: 'auth-83b55',
      storageBucket: 'auth-83b55.appspot.com',
      messagingSenderId: '336129973935'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>My App</Text>
      </View>
    );
  }
}

export default App;
