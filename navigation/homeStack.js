import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import CreateRecipe from '../screens/createRecipe/createRecipe';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Main' component={Home} />
          <Stack.Screen name='CreateRecipe' component={CreateRecipe} />
        </Stack.Navigator>
      );
    };
    
    export default HomeStack;
