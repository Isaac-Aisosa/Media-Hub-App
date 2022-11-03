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

import UploadList from './uploadList';
import DownloadList from './downloadList';

const Tab = createMaterialTopTabNavigator();


export default function Activity({ navigation })
 {
  
 return (
    <View style={styles.container}>
     <StatusBar translucent backgroundColor="red" barStyle={'light-content'}/>
    
    <View style={{backgroundColor:'red', width:'100%', height:70}}>
     <View style={{marginTop:35,marginLeft:20,flexDirection:'row'}}>
        <MaterialCommunityIcons name="folder-network-outline" style={{fontSize:25,color:'#fff'}} />
       <Text style={{fontSize:20,color:'#fff',fontWeight:'normal'}}>Activity Logs</Text>
     </View>
    </View>

    <Tab.Navigator 
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, color:'#fff', fontWeight:'bold' },
        tabBarStyle: { backgroundColor: 'red' },
        tabBarActiveTintColor:'#e8e6e6',
      }}>
      <Tab.Screen name="Uploads" component={UploadList} />
      <Tab.Screen name="Downloads" component={DownloadList} />
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
