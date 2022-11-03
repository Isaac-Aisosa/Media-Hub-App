import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, Text, View, 
        Image,Button,TextInput, Platform, 
        ToastAndroid, ScrollView, 
        Pressable,BackHandler,Dimensions
         
      } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default function HubList({ navigation })
 {

  useEffect(() => {
    HubStorage();
    AudioCount();
    const interval1 = setInterval(() => HubStorage(), 10000)
    const interval2 = setInterval(() => AudioCount(), 10000)
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    }
  }, [])

  const [capacity, setCapacity] = useState("0");
  const [space, setSpace] = useState("0");
  const [usedSpaces, setUsedSpace] = useState("0");
  const [audioCount, setAudioCount] = useState("0");

  async function AudioCount() {
    try{
          await axios.get('http://192.168.43.110/get/audio/count', 
         {  
  
         }).then(function (response) {
        // console.log(response.data);
        console.log(response.data);
        setAudioCount(response.data.AudioCount);
         })
        .catch(function (error) {
        console.log(error);
        ToastAndroid.show("failed to get Audio Count", ToastAndroid.SHORT);
        });
       }
   catch(error) {
      console.log(error)
      }
    }
  

    async function HubStorage() {
      try{
            await axios.get('http://192.168.43.110/get/hub/storage', 
           {  
    
           }).then(function (response) {
          // console.log(response.data);
          setCapacity((response.data.memorySize/1000).toFixed(2) + ' GB');
          setUsedSpace((response.data.memoryUsed/1000).toFixed(2) + ' GB');
          setSpace(((response.data.memorySize - response.data.memoryUsed)/1000).toFixed(2) + ' GB');

           })
          .catch(function (error) {
          console.log(error);
          ToastAndroid.show("failed to get Hub Storage", ToastAndroid.SHORT);
          });
         }
     catch(error) {
        console.log(error)
        }
      }

  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <ScrollView >

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:20,marginLeft:20}}>
   <MaterialCommunityIcons name="memory" style={{fontSize:40,color:'#13038c'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Media Hub Storage ({capacity}){'\n'}
   <Text style={{fontSize:15,color:'#5a5b5c',fontWeight:'normal'}}>(Free:{space} , Used:{usedSpaces})</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('HubVideoList')}>
   <MaterialCommunityIcons name="filmstrip" style={{fontSize:40,color:'red'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Videos (300){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: MP4, AVI, MOV, MKV etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('HubAudioList')}>
   <MaterialCommunityIcons name="music-box-multiple" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Audios ({audioCount}){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: MP3, WAV, WMA etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('HubPhotoList')}>
   <MaterialCommunityIcons name="image-multiple" style={{fontSize:40,color:'#038c0a'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Photos (2300){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: JPG, PNG, BMP etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('HubDocList')}>
   <MaterialCommunityIcons name="text-box-multiple" style={{fontSize:40,color:'#8c032e'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Documents (23){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: PDF, Word, PPT etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('HubAppList')}>
   <MaterialCommunityIcons name="apps" style={{fontSize:40,color:'#03888c'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Applications (300){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: APK, IPSW, EXE etc.</Text></Text>
   </Pressable>


    
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
