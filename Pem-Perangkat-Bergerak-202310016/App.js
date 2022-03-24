import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Component, ReactNode } from 'react';
import ViewComponent  from "./ViewComponent";
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
import TextInputComponent from './TextInput';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <ViewComponent />
        <TextComponent />
        <ButtonComponent />
        <ImageComponent />
        <TextInputComponent />
      </ScrollView>
      
    );
  }
}
