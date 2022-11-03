import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, ToastAndroid,Pressable,Image } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';


export default function AudioList({ navigation })
 {
  const [audioFiles, setAudioFiles] = useState([]);
  const [audioCount, setAudioCount] = useState("");
  const [loading, setLoading] = useState(true);
  

  const SelectAudio = async () => {
    let result = await DocumentPicker.getDocumentAsync({
        type: "audio/*" // all images files
    });
    console.log(result.uri);
    // setFile(result.uri)
    // setfilename(result.name)
    // setFileMIME(result.mimeType);
    //alert(result.uri);
    

    
    }
    SelectAudio;
    const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);

    if (permission.granted) {
      // we want to get all the audio files
      getAudioFiles();
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
        //    we want to get all the audio files
        getAudioFiles();
      }

      if (status === 'denied' && !canAskAgain) {
        //   we want to display some error to the user
      }
    }
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

    setAudioFiles(media.assets);
    setAudioCount(media.totalCount);
    if(media.totalCount != null){setLoading(false)}
  };

 function uploadAudio(uri){ 
  ToastAndroid.show('Uploading Audio to Media Hub ' + uri, ToastAndroid.SHORT);
  FileSystem.uploadAsync('http://192.168.43.110/upload/audio', uri, 
  {
    httpMethod: "POST",
    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    fieldName: "file", // Important! make sure this matches however you want bussboy to validate the "name" field on file.
    mimeType: 'audio/mp3',
    headers: {
      "content-type": "multipart/form-data",
     // Authorization: `${idToken}`,
    },
  }).then(function (response) {
    console.log(response.status);
    ToastAndroid.show("Audio Uploaded", ToastAndroid.SHORT);
    })
    .catch(function (error) {
      console.log(error);
      //ToastAndroid.show(error, ToastAndroid.SHORT);
    });

  }


  useEffect(() => {
    getPermission();
  }, []);
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:10, borderRadius:5, height:30,textAlign:'center', flexDirection:'row', justifyContent:'center'}} onPress={(uri)=>uploadVideo(item.uri)}>
    <Text style={{color:'#fff', fontSize:14, textAlignVertical:'center'}}>({audioCount}) Audios</Text>
    </Pressable>

    <ActivityIndicator animating={loading} style={{position:'absolute', alignSelf:'center', paddingVertical:50, marginTop:20}} size={50} color='#4287f5'/>
    
    <FlatList
      data={audioFiles}
      keyExtractor={item => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        
        <View style={{backgroundColor:'#fff', flex: 1,
        flexDirection: 'column',
         margin: 1, borderBottomWidth:0.5, borderBottomColor:'#dedee3'}}>
      
          <MaterialCommunityIcons name="music-circle" style={{fontSize:100,color:'#000', justifyContent: 'center',
                          alignItems: 'center',
                         }} />
          <View style={{flexDirection:'row',marginRight:20,}}>
          
           <Text numberOfLines={2} style={styles.audioTitle}>{item.filename}</Text>
           </View>
           <Text numberOfLines={1} style={styles.audioDuration}>{Math.floor(item.duration/60)}mins</Text> 
           <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:0, borderRadius:5, height:30, flexDirection:'row', justifyContent:'center'}} onPress={(uri)=>uploadAudio(item.uri)}>
            <Text style={{color:'white', alignSelf:'center'}}>Upload</Text>
            <MaterialCommunityIcons name="progress-upload" style={{fontSize:12,color:'white', alignSelf:'center'}}   onPress={(uri)=>uploadAudio(item.uri)}/>
     
            </Pressable>

          
           </View>
       
      )}
    />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: '#fff',
        width:Dimensions.get("window").width,
        height:'100%'
      },

      audioTitle: {
        textAlign: 'left',
        fontSize:12,
        margin:10,
        marginBottom:0,
        marginLeft:3,
        fontWeight:'normal'
      },

      audioDuration: {
        textAlign: 'left',
        fontSize:14,
        margin:10,
        marginTop:0,
        color:'#82807f',
        fontWeight:'normal'
      },

      

     Title: {
        textAlign: 'center',
        fontSize:20,
        marginTop:10,
        fontWeight:'bold',
        color:'#060670'
        

      },

});
