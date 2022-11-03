import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import MediaMeta from 'react-native-media-meta';
import * as FileSystem from 'expo-file-system';
import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, ToastAndroid, Image, Pressable } from 'react-native';
import { Thumbnail } from 'react-native-thumbnail-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function VideoList({ navigation })
 {
  const [videoFiles, setVideoFiles] = useState([]);
  const [videoCount, setVideoCount] = useState("0");
  const [loading, setLoading] = useState(true);
  const path = '';

    const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);

    if (permission.granted) {
      // we want to get all the Video files
      getVideoFiles();
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

  const getVideoFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: 'video',
    });
    //console.log(media);

    media = await MediaLibrary.getAssetsAsync({
      mediaType: 'video',
      first: media.totalCount,
    });

    setVideoFiles(media.assets);
    setVideoCount(media.totalCount);
    if(media.totalCount != null){setLoading(false)}
  };

  function uploadVideo(uri){ 
    ToastAndroid.show('Uploading Video to Media Hub ' + uri, ToastAndroid.LONG);
    FileSystem.uploadAsync('http://192.168.43.110/upload/video', uri, 
    {
      httpMethod: "POST",
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: "file", // Important! make sure this matches however you want bussboy to validate the "name" field on file.
      mimeType: 'video',
      headers: {
        "content-type": "multipart/form-data",
       // Authorization: `${idToken}`,
      },
    }).then(function (response) {
      console.log(response.status);
      ToastAndroid.show("Video Uploaded", ToastAndroid.SHORT);
      })
      .catch(function (error) {
        console.log(error);
        //ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  useEffect(() => {
    getPermission();
  }, []);
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:10, borderRadius:5, height:30,textAlign:'center', flexDirection:'row', justifyContent:'center'}} onPress={(uri)=>uploadVideo(item.uri)}>
    <Text style={{color:'#fff', fontSize:14, textAlignVertical:'center'}}>({videoCount})  Videos</Text>
    </Pressable>

    <ActivityIndicator animating={loading} style={{position:'absolute', alignSelf:'center', paddingVertical:50, marginTop:20}} size={50} color='#4287f5'/>
    
    <FlatList
      data={videoFiles}
      keyExtractor={item => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        
        <View style={{backgroundColor:'#fff', flex: 1,
        flexDirection: 'column',
         margin: 1,}}>
            <Image  style={{justifyContent: 'center',
                          alignItems: 'center',
                          height: 100,}}         
          source={{
            uri: item.uri,
          }}/>
          <View style={{flexDirection:'row',marginRight:20,}}>
           <Text numberOfLines={2} style={styles.videoTitle}>{item.filename}</Text>
           </View>
           <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:0, borderRadius:5, height:30, flexDirection:'row', justifyContent:'center'}} onPress={(uri)=>uploadVideo(item.uri)}>
            <Text style={{color:'white', alignSelf:'center'}}>Upload</Text>
            <MaterialCommunityIcons name="progress-upload" style={{fontSize:12,color:'white', alignSelf:'center'}}   onPress={(uri)=>uploadVideo(item.uri)}/>
     
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

      videoTitle: {
        textAlign: 'left',
        fontSize:14,
        margin:10,
        marginBottom:0,
        marginLeft:3,
        fontWeight:'normal'
      },

      videoDuration: {
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
