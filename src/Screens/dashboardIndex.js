import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './dashboard';
import VideoStreamList from './Streams/VideoStreamList'
import AudioStream from './Streams/AudioStream'
import AppsStreamList from './Streams/AppsStreamList'
import AudioCast from './Streams/AudioCast'
import DocumentStreamList from './Streams/DocumentStreamList'
import Games from './Streams/Games'
import InternetRadio from './Streams/InternetRadio'
import PhotoStreamList from './Streams/PhotoStreamList'
import TVOut from './Streams/TVOut'
import VideoCast from './Streams/VideoCast'


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='Dashboard' component={Dashboard}/>
        <RootStack.Screen name='VideoStreamList' component={VideoStreamList}/>
        <RootStack.Screen name='AudioStream' component={AudioStream}/>
        <RootStack.Screen name='AppsStreamList' component={AppsStreamList}/>
        <RootStack.Screen name='AudioCast' component={AudioCast}/>
        <RootStack.Screen name='DocumentStreamList' component={DocumentStreamList}/>
        <RootStack.Screen name='Games' component={Games}/>
        <RootStack.Screen name='InternetRadio' component={InternetRadio}/>
        <RootStack.Screen name='PhotoStreamList' component={PhotoStreamList}/>
        <RootStack.Screen name='TVOut' component={TVOut}/>
        <RootStack.Screen name='VideoCast' component={VideoCast}/>
    </RootStack.Navigator>
);
export default RootStackScreen;
