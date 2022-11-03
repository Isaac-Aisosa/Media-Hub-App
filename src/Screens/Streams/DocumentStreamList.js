import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableHighlight, Dimensions, ToastAndroid,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput, RadioButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { Button } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function DocumentStreamList() {
  return (
    <SafeAreaView  style={{width:'100%',height:'100%', backgroundColor:'#fff'}}>
      <StatusBar translucent backgroundColor="transparent" style='light'/>
    <Text style={{alignSelf:'center'}}>Document Stram List</Text>
    </SafeAreaView>
  );
}

