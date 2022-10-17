import React, {useEffect} from "react";
import { View, Image, Text} from 'react-native';
import estilo from "./splashscreenStyles";
import images from '../../constants/images';
import SpinAnimation from "./spinAnimation";

export default function Splash({navigation}) {
    useEffect(() => {
        const timer = setTimeout(() => {navigation.navigate('Welcome')}, 3000);
        return() => clearTimeout(timer);
    }, []);
    return (
        <View style = {estilo.container}>
            <Image source={images.splash} style={estilo.imageStyle}/>
            <SpinAnimation />
            <Text style={estilo.loadText}> Loading...</Text>
        </View>
    );
}