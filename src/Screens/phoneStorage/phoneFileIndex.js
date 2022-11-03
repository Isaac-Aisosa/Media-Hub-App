import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PhoneList from './phoneList';
import PhoneVideoList from './videoList';
import PhoneAudioList from './audioList'
import PhoneDocList from './documentList'
import PhoneAppList from './AppList'
import PhonePhotoList from './photoList'


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='PhoneList' component={PhoneList}/>
        <RootStack.Screen name='PhoneVideoList' component={PhoneVideoList}/>
        <RootStack.Screen name='PhoneAudioList' component={PhoneAudioList}/>
        <RootStack.Screen name='PhoneDocList' component={PhoneDocList}/>
        <RootStack.Screen name='PhoneAppList' component={PhoneAppList}/>
        <RootStack.Screen name='PhonePhotoList' component={PhonePhotoList}/>
 
    </RootStack.Navigator>
);
export default RootStackScreen;


