import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Setup from './setup';

import WiffiSetup from './Settings/wiffiSetup';
import BluetoothSetup from './Settings/BluetoothSetup';
import DisplaySetup from './Settings/displaySetup';
import AudioSetup from './Settings/audioSetup';
import AdminSetup from './Settings/adminSetup';
import AboutDevice from './Settings/aboutDevice';
import DeviceStatus from './Settings/deviceStatus';




const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='Setup' component={Setup}/>

        <RootStack.Screen name='WiffiSetup' component={WiffiSetup}/>
        <RootStack.Screen name='BluetoothSetup' component={BluetoothSetup}/>
        <RootStack.Screen name='DeviceStatus' component={DeviceStatus}/>
        <RootStack.Screen name='DisplaySetup' component={DisplaySetup}/>
        <RootStack.Screen name='AudioSetup' component={AudioSetup}/>
        <RootStack.Screen name='AdminSetup' component={AdminSetup}/>
        <RootStack.Screen name='AboutDevice' component={AboutDevice}/>
 
    </RootStack.Navigator>
);
export default RootStackScreen;
