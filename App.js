import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AddEntry from "./components/AddEntry";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
    <View>
      <AddEntry />
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
