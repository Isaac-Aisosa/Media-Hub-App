import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, 
        Text, View, 
        Image,Button,
        TextInput, Platform, 
        ToastAndroid, ScrollView, 
        Pressable,BackHandler,
        Dimensions,StatusBar
       } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import info1 from '../../assets/th5.png'

export default function Dashboard({ navigation })
 {
  
 return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="red" barStyle={'light-content'}/>

    <View style={{backgroundColor:'#fff', width:'100%', height:50, marginTop:30}}>
    <Text style={{color:'#000',fontSize:30, alignSelf:'center',fontWeight:'bold'}}>Media Hub</Text>
    </View>
    <ScrollView >
     
     <View style={{flexDirection:'row', alignSelf:'center'}}>
     <Pressable style={styles.box1} onPress={()=>navigation.navigate('VideoStreamList')}>
     <MaterialCommunityIcons name="youtube" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Videos</Text>
     </Pressable>

     <Pressable style={styles.box2} onPress={()=>navigation.navigate('AudioStream')}>
     <MaterialCommunityIcons name="music-circle" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Audios</Text>
    </Pressable>
     </View>


     <View style={{flexDirection:'row', alignSelf:'center'}}>
     <Pressable style={styles.box3} onPress={()=>navigation.navigate('PhotoStreamList')}>
     <MaterialCommunityIcons name="image-multiple" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Photos</Text>
     </Pressable>

     <Pressable style={styles.box4} onPress={()=>navigation.navigate('DocumentStreamList')}>
     <MaterialCommunityIcons name="text-box-multiple" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Documents</Text>
    </Pressable>
     </View>


     <View style={{flexDirection:'row', alignSelf:'center'}}>
     <Pressable style={styles.box5} onPress={()=>navigation.navigate('AppsStreamList')}>
     <MaterialCommunityIcons name="apps" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Apps</Text>
     </Pressable>

     <Pressable style={styles.box6} onPress={()=>navigation.navigate('Games')}>
     <MaterialCommunityIcons name="gamepad-variant" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Games</Text>
    </Pressable>
     </View>


     <View style={{flexDirection:'row', alignSelf:'center'}}>
     <Pressable style={styles.box7} onPress={()=>navigation.navigate('VideoCast')}>
     <MaterialCommunityIcons name="cast-connected" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Cast Video</Text>
     </Pressable>

     <Pressable style={styles.box8} onPress={()=>navigation.navigate('AudioCast')}>
     <MaterialCommunityIcons name="cast-audio" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Cast Audio</Text>
    </Pressable>
     </View>

     <View style={{flexDirection:'row', alignSelf:'center', marginBottom:100}}>
     <Pressable style={styles.box9} onPress={()=>navigation.navigate('InternetRadio')}>
     <MaterialCommunityIcons name="radio" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>Internet Radio</Text>
     </Pressable>

     <Pressable style={styles.box10} onPress={()=>navigation.navigate('TVOut')}>
     <MaterialCommunityIcons name="television" style={{fontSize:80, alignSelf:'center', marginTop:20, color:'#fff'}} />
     <Text style={{color:'#fff',fontSize:18, alignSelf:'center',}}>TV Out</Text>
    </Pressable>
     </View>
    </ScrollView>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: '#fff',
        width:'100%',
        height:'100%'
      },

   box1:{
      width:'43%',
      height:150,
      backgroundColor:'#ed0722',
      borderRadius:15,
      margin:10,


   } ,  

   box2:{
    width:'43%',
    height:150,
    backgroundColor:'#f74e05',
    borderRadius:15,
    margin:10,
 } , 

 box3:{
    width:'43%',
    height:150,
    backgroundColor:'#12a302',
    borderRadius:15,
    margin:10,
 } , 

 box4:{
    width:'43%',
    height:150,
    backgroundColor:'#0242a3',
    borderRadius:15,
    margin:10,
 } ,
 
 box5:{
    width:'43%',
    height:150,
    backgroundColor:'#05a0e3',
    borderRadius:15,
    margin:10,
 } , 

 box6:{
    width:'43%',
    height:150,
    backgroundColor:'#07697d',
    borderRadius:15,
    margin:10,
 } , 

 box7:{
    width:'43%',
    height:150,
    backgroundColor:'#7d0723',
    borderRadius:15,
    margin:10,
 } ,
 
 box8:{
    width:'43%',
    height:150,
    backgroundColor:'#f09d05',
    borderRadius:15,
    margin:10,
 } ,
 
 box9:{
    width:'43%',
    height:150,
    backgroundColor:'#cc05f0',
    borderRadius:15,
    margin:10,
 } ,

 box10:{
    width:'43%',
    height:150,
    backgroundColor:'#7d7a7b',
    borderRadius:15,
    margin:10,
 } ,
});
