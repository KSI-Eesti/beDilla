import React from "react";
import { View, Image, Text} from 'react-native';
import estilo from "./splashscreenStyles";
import images from "../constants/images";
import SpinAnimation from "./spinAnimation";

export default function Splash() {
    return (
        <View style = {estilo.container}>
            <Image source={images.splash} style={estilo.imageStyle}/>
            <SpinAnimation />
            <Text style={estilo.loadText}> Loading...</Text>
        </View>
    );
}