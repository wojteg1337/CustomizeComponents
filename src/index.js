import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const noop = () => {
  console.log('I am working.');
};

import withAnimation from './withAnimation';
import Button, { AnimatedBasicButton } from './Button';

export default class CustomizeComponents extends Component {
  static propTypes = {
    continent: PropTypes.string,
    country: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>

        <Button onPress={noop} />

        <Button
          label='Press me'
          buttonStyle={styles.square}
          textColor={styles.squareColor}
          onPress={noop} />

        <Button.Brown onPress={noop} />

        <AnimatedBasicButton onPress={noop} />
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
    width: 100,
    height: 100,
    backgroundColor: 'ivory',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  squareColor: {
    color: 'rebeccapurple',
    fontSize: 16,
  },
});

AppRegistry.registerComponent('CustomizeComponents', () => CustomizeComponents);
