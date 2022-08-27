import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={ZipCodeScreen}
          options={{
          title: 'Home "Province"',
          headerStyle: {
            backgroundColor: 'rgba( 222, 184, 135, 1 )',
          },
          headerTintColor: '#660000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
          title: 'Weather',
          headerStyle: {
            backgroundColor: 'rgba( 143, 188, 143, 1 )',
          },
          headerTintColor: '#006666',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>   
  );
}

