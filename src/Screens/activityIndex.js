import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Activity from './activity';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='Activity' component={Activity}/>
 
    </RootStack.Navigator>
);
export default RootStackScreen;
