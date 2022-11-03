import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, Text, View, 
        Image,Button,TextInput, Platform, 
        ToastAndroid, ScrollView, 
        Pressable,BackHandler,Dimensions
         
      } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DisplaySetup({ navigation })
 {
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <ScrollView >
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginTop:10}}>Display Setup</Text>
   </ScrollView>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: '#fff',
        width:Dimensions.get("window").width,
        height:'100%'
      },


});
