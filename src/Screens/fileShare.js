import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, Text, View, 
        Image,Button,TextInput, Platform, 
        ToastAndroid, ScrollView, StatusBar,
        ImageBackground,Pressable,BackHandler,Dimensions
         
      } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PhoneIndex from './phoneStorage/phoneFileIndex';
import HubIndex from './HubStorage/hubFileIndex';

const Tab = createMaterialTopTabNavigator();


export default function ShareFile({ navigation })
 {
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="red" barStyle={'light-content'}/>
    
    <View style={{backgroundColor:'red', width:'100%', height:70}}>
     <View style={{marginTop:35,marginLeft:20,flexDirection:'row'}}>
        <MaterialCommunityIcons name="swap-vertical-bold" style={{fontSize:25,color:'#fff'}} />
       <Text style={{fontSize:20,color:'#fff',fontWeight:'normal'}}>Media Share</Text>
     </View>
    </View>

    <Tab.Navigator 
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, color:'#fff', fontWeight:'bold' },
        tabBarStyle: { backgroundColor: 'red' },
        tabBarActiveTintColor:'#e8e6e6',
      }}>
      <Tab.Screen name="Phone Storage" component={PhoneIndex} />
      <Tab.Screen name="Media Hub" component={HubIndex} />
    </Tab.Navigator>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
      },
});
