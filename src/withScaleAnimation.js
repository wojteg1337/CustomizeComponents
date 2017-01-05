import React from 'react';
import { View, Animated, Easing } from 'react-native';

const withScaleAnimation = (Component) => class withScaleAnimation extends React.Component {
  static propTypes = {
    onPress: React.PropTypes.func,
  }

  constructor () {
    super();

    this.state = {
      scaleValue: new Animated.Value(1),
    };
  }

  scaleAnimation = (callback) => {
    Animated.sequence([
      Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1.2,
        duration: 250,
        easing: Easing.linear,
      }),
      Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1.0,
        duration: 250,
        easing: Easing.linear,
      })
    ]).start(callback);
  }

  animatedOnPress = () => this.scaleAnimation(this.props.onPress);

  render() {
    const { onPress, ...passProps } = this.props;

    const animationStyle = {
      transform: [
        { scaleX: this.state.scaleValue },
        { scaleY: this.state.scaleValue },
      ]
    };

    return (
      <View>
        <Animated.View style={animationStyle}>
          <Component onPress={this.animatedOnPress} {...passProps} />
        </Animated.View>
      </View>
    );
  }
};

export default withScaleAnimation;
