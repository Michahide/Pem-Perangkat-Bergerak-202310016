import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LabelComponent from "./LabelComponent.tsx"

export default class App extends Component {
  render() {
    return (
      <LabelComponent />
    );
  }
}