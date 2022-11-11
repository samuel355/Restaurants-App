import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import {useColorScheme} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;