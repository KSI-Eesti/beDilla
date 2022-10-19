import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/SplashScreen/splashscreen';
import WelcomeScreen from '../screens/welcomeScreen/WelcomeScreen';
import Login from '../screens/LogIn/login';
import SignIn from '../screens/signIn/signIn';
import HomeStack from './homeStack';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/themes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
    return(
        <Tab.Navigator 
            screenOptions={{
            tabBarActiveTintColor: COLORS.PRIMARY_GREEN,
            tabBarInactiveTintColor: COLORS.LIGHT_GREY,
            headerShown: false,
          }}
        >
            <Tab.Screen
                name='Home'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}


const Navigator = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Stack.Navigator initialRouteName = "Splash" screenOptions={{ headerShown : false}}>
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name='Welcome' component={WelcomeScreen}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='Home' component={TabScreen}/>
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