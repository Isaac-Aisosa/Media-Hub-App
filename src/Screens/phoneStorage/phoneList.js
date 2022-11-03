import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, Text, View, 
        Image,Button,TextInput, Platform, 
        ToastAndroid, ScrollView, 
        Pressable,BackHandler,Dimensions
         
      } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';


export default function PhoneList({ navigation })
 {

  const [docCount, setDocCount] = useState("0");
  const [audioCount, setAudioCount] = useState("0");
  const [videoCount, setVideoCount] = useState("0");
  const [photoCount, setPhotoCount] = useState("0");
  const [capacity, setCapacity] = useState("0");
  const [space, setSpace] = useState("0");
  const [usedSpaces, setUsedSpace] = useState("0");

  const getPermission = async () => {
  const permission = await MediaLibrary.getPermissionsAsync();
  console.log(permission);

  if (permission.granted) {
    // we want to get all the Doc files
    getDocFiles();
    getAudioFiles();
    getVideoFiles();
    getPhotoFiles();
    getStorage();
  }

  if (!permission.canAskAgain && !permission.granted) {
    console.log("user denied and we can't ask again");
  }

  if (!permission.granted && permission.canAskAgain) {
    const {
      status,
      canAskAgain,
    } = await MediaLibrary.requestPermissionsAsync();

    if (status === 'denied' && canAskAgain) {
      //   we are going to display alert that user must allow this permission to work this app
      // permissionAllert();
    }

    if (status === 'granted') {
      //    we want to get all the Doc files
      getDocFiles();
      getAudioFiles();
      getVideoFiles();
      getPhotoFiles();
      getStorage();
    }

    if (status === 'denied' && !canAskAgain) {
      //   we want to display some error to the user
    }
  }
};

const getDocFiles = async () => {
  let media = await MediaLibrary.getAssetsAsync({
    mediaType: 'unknown',
  });
  //console.log(media);

  media = await MediaLibrary.getAssetsAsync({
    mediaType: 'unknown',
    first: media.totalCount,
  });
  setDocCount(media.totalCount);
};

const getAudioFiles = async () => {
  let media = await MediaLibrary.getAssetsAsync({
    mediaType: 'audio',
  });
  //console.log(media);

  media = await MediaLibrary.getAssetsAsync({
    mediaType: 'audio',
    first: media.totalCount,
  });
  setAudioCount(media.totalCount);
};

const getVideoFiles = async () => {
  let media = await MediaLibrary.getAssetsAsync({
    mediaType: 'video',
  });
  //console.log(media);

  media = await MediaLibrary.getAssetsAsync({
    mediaType: 'video',
    first: media.totalCount,
  });
  setVideoCount(media.totalCount);
};

const getPhotoFiles = async () => {
  let media = await MediaLibrary.getAssetsAsync({
    mediaType: 'photo',
  });
  //console.log(media);

  media = await MediaLibrary.getAssetsAsync({
    mediaType: 'photo',
    first: media.totalCount,
  });
  setPhotoCount(media.totalCount);
};


//Cal internal Storage Capacity................................
const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){
 let kb = x/1000
 let mb = kb/1000
 let gb = mb/1000
 let usedSpace = capacity - space;
 setUsedSpace(usedSpace.toFixed(2));
  return(gb.toFixed(2));
}

const getStorage = async () => {
  await FileSystem.getTotalDiskCapacityAsync().then(totalDiskCapacity => {

  setCapacity(niceBytes(totalDiskCapacity));
  });

 await FileSystem.getFreeDiskStorageAsync().then(freeDiskStorage => {
    setSpace(niceBytes(freeDiskStorage));

   
  });

};

useEffect(() => {
  getPermission();
}, []);
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <ScrollView >

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:20,marginLeft:20}}>
   <MaterialCommunityIcons name="memory" style={{fontSize:40,color:'red'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Phone Storage ({capacity}GB){'\n'}
   <Text style={{fontSize:15,color:'#5a5b5c',fontWeight:'normal'}}>(Free: {space}GB Used:{usedSpaces}GB)</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('PhoneVideoList')}>
   <MaterialCommunityIcons name="filmstrip" style={{fontSize:40,color:'red'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Videos ({videoCount}){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: MP4, AVI, MOV, MKV etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('PhoneAudioList')}>
   <MaterialCommunityIcons name="music-box-multiple" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Audios ({audioCount}){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: MP3, WAV, WMA etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('PhonePhotoList')}>
   <MaterialCommunityIcons name="image-multiple" style={{fontSize:40,color:'#038c0a'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Photos ({photoCount}){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: JPG, PNG, BMP etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('PhoneDocList')}>
   <MaterialCommunityIcons name="text-box-multiple" style={{fontSize:40,color:'#8c032e'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Documents ({docCount}){'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Include: PDF, Word, PPT etc.</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('PhoneAppList')}>
   <MaterialCommunityIcons name="apps" style={{fontSize:40,color:'#03888c'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Applications ({docCount}){'\n'}
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
