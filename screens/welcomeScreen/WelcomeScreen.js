import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import  images  from '../../constants/images';
import stile from './WelcomeScreenStyle';

export default function WelcomeScreen({navigation}) {
    return(
        <View style={stile.container}>
            <ImageBackground source={images.welcome} style={stile.image}>
                <View style={stile.cookingTxt}>
                    <Text style={stile.text}> Dilla Menus & Recipes </Text>
                </View>
                <View style={stile.flexEnd}>
                    <TouchableOpacity style={stile.login} onPress={() => {navigation.navigate('Login')}}>
                        <Text style={stile.texte}> Login </Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={stile.register} onPress={() => {navigation.navigate('SignIn')}}> 
                        <Text style={stile.textes}> Register </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}