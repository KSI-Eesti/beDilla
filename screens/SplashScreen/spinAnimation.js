import React, {useEffect} from 'react';
import { Animated } from 'react-native';
import { images } from '../../constants/images';

const spinValue = new Animated.Value(0); // initialise the value of the spinning animation(for now it is static)

export default function SpinAnimation() {
    useEffect(() => {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 8000,
        // useNativeDriver to load animation faster by sending animation information to the UI
        useNativeDriver: true,
      }).start();
    }, []);

    const spinning = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
      });

    return(
        <Animated.Image 
            style={{ transform : [{ rotate: spinning }], width: 150, height: 150}}
            source={images.spinIcon}
        />
    );
}
