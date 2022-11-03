// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import  Root from './src/Screens/Root';
import * as NavigationBar from 'expo-navigation-bar';

const Stack = createStackNavigator();
NavigationBar.setBackgroundColorAsync("red");

class App extends React.Component {
  render(){ 
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>

        <Stack.Screen name="Root" component={Root}  
        options={{ title: 'Media Hub',
        headerShown: false,
        headerTitleStyle: {
        fontWeight: 'bold',       
        },
        }}/>

       
     </Stack.Navigator>  
    </NavigationContainer>

  );

  
}

}
export default (App)

