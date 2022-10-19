import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import CreateRecipe from '../screens/createRecipe/createRecipe';
import Description from '../screens/Description/Description';
import DescriptionTwo from '../screens/Description/Description2';
import DescriptionThree from '../screens/Description/Description3';
import DescriptionFour from '../screens/Description/Description4';


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
          <Stack.Screen name='Description' component={Description} />
          <Stack.Screen name='Description2' component={DescriptionTwo} />
          <Stack.Screen name='Description3' component={DescriptionThree} />
          <Stack.Screen name='Description4' component={DescriptionFour} />
        </Stack.Navigator>
      );
    };
    
    export default HomeStack;
