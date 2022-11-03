import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HubList from './hubList';
import HubVideoList from './videoList';
import HubAudioList from './audioList'
import HubDocList from './documentList'
import HubAppList from './AppList'
import HubPhotoList from './photoList'


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='HubList' component={HubList}/>
        <RootStack.Screen name='HubVideoList' component={HubVideoList}/>
        <RootStack.Screen name='HubAudioList' component={HubAudioList}/>
        <RootStack.Screen name='HubDocList' component={HubDocList}/>
        <RootStack.Screen name='HubAppList' component={HubAppList}/>
        <RootStack.Screen name='HubPhotoList' component={HubPhotoList}/>
 
    </RootStack.Navigator>
);
export default RootStackScreen;


