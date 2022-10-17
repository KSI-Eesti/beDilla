import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/SplashScreen/splashscreen';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import Login from '../screens/LogIn/login';
import SignIn from '../screens/signIn/signIn';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Stack.Navigator initialRouteName = "Splash" screenOptions={{ headerShown : false}}>
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name='Welcome' component={WelcomeScreen}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
            </Stack.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    }
});

export default Navigator;