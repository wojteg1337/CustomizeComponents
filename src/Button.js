import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import withAnimation from './withAnimation';

export default function Button({
  onPress,
  label = 'Click me',
  buttonStyle = styles.button,
  textColor = styles.text,
}) {

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textColor}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  buttonStyle: React.PropTypes.any,
  textColor: React.PropTypes.any,
};

Button.Brown = ({ onPress }) => (
    <Button
      onPress={onPress}
      label="Click here"
      buttonStyle={styles.brownButton}
      textColor={styles.brown}
    />
);

export const AnimatedBasicButton = withAnimation(Button);

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 75,
    backgroundColor: 'ivory',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
  brown: {
    color: 'maroon',
  },
  brownButton: {
    width: 100,
    height: 60,
    backgroundColor: 'seashell',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});
