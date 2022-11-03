import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, Text, View, 
        Image,Button,TextInput, Platform, 
        ToastAndroid, ScrollView, 
        Pressable,BackHandler,Dimensions
         
      } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function UploadList({ navigation })
 {
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <ScrollView >

   <View style={{width:'100%',height:50, flexDirection:'row', marginTop:0,marginLeft:0,backgroundColor:'#d7d7d9',alignItems:'center'}}>
   <MaterialCommunityIcons name="upload-network" style={{fontSize:30,color:'red', marginLeft:20}} />
   <Text style={{fontSize:18,color:'red',fontWeight:'normal', marginLeft:10}}>Current Upload (0)</Text>
   </View>
    
   <View style={{width:'100%',height:50, flexDirection:'row', marginTop:0,marginLeft:0,backgroundColor:'#d7d7d9',alignItems:'center'}}>
   <MaterialCommunityIcons name="check-network" style={{fontSize:30,color:'green', marginLeft:20}} />
   <Text style={{fontSize:18,color:'green',fontWeight:'normal', marginLeft:10}}>Complete Upload (0)</Text>
   </View>

   
    
    </ScrollView>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: '#fff',
        width: '100%',
        height:'100%'
      },


});
