import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FileShare from './fileShare';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='FileShare' component={FileShare}/>

    </RootStack.Navigator>
);
export default RootStackScreen;


