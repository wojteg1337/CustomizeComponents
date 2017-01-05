import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const buttonPressed = () => {
  console.log(`It's working.`);
};

import Button, { AnimatedBasicButton } from './Button';

export default class CustomizeComponents extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Button onPress={buttonPressed} />

        <Button
          label='Press me'
          buttonStyle={styles.square}
          textColor={styles.squareColor}
          onPress={buttonPressed} />

        <Button.Brown onPress={buttonPressed} />

        <AnimatedBasicButton onPress={buttonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: 'ivory',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  squareColor: {
    color: 'rebeccapurple',
    fontSize: 14,
  },
});

AppRegistry.registerComponent('CustomizeComponents', () => CustomizeComponents);
