import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, ToastAndroid, Image, Pressable } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function PhotoList({ navigation })
 {
  const [photoFiles, setPhotoFiles] = useState([]);
  const [photoCount, setPhotoCount] = useState("0");
  const [loading, setLoading] = useState(true);

    const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);

    if (permission.granted) {
      // we want to get all the Video files
      getPhotoFiles();
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
        getPhotoFiles();
      }

      if (status === 'denied' && !canAskAgain) {
        //   we want to display some error to the user
      }
    }
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
    setPhotoFiles(media.assets);
    setPhotoCount(media.totalCount);
    if(media.totalCount != null){setLoading(false)}
  };

  function uploadPhoto(uri){ 
    ToastAndroid.show('Uploading Photo to Media Hub ' + uri, ToastAndroid.LONG);
    FileSystem.uploadAsync('http://192.168.43.110/upload/photo', uri, 
    {
      httpMethod: "POST",
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: "file", // Important! make sure this matches however you want bussboy to validate the "name" field on file.
      mimeType: 'image',
      headers: {
        "content-type": "multipart/form-data",
       // Authorization: `${idToken}`,
      },
    }).then(function (response) {
      console.log(response.status);
      ToastAndroid.show("Photo Uploaded", ToastAndroid.SHORT);
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
    <Text style={{color:'#fff', fontSize:14, textAlignVertical:'center'}}>({photoCount}) Photos</Text>
    </Pressable>

    <ActivityIndicator animating={loading} style={{position:'absolute', alignSelf:'center', paddingVertical:50, marginTop:20}} size={50} color='#4287f5'/>
    
    <FlatList
      data={photoFiles}
      numColumns={3}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        
       
        <View style={{backgroundColor:'#fff', flex: 1,
                      flexDirection: 'column',
                       margin: 1, borderBottomWidth:0.5, borderBottomColor:'#dedee3'}}>
          <Image  style={{justifyContent: 'center',
                          alignItems: 'center',
                          height: 100,}}         
          source={{
            uri: item.uri,
          }}/>
          <View style={{flexDirection:'row',marginRight:20,}}>
         
           <Text numberOfLines={2} style={styles.videoTitle}>{item.filename}</Text>
           </View>
           <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:0, borderRadius:5, height:30, flexDirection:'row', justifyContent:'center'}} onPress={(uri)=>uploadPhoto(item.uri)}>
            <Text style={{color:'white', alignSelf:'center'}}>Upload</Text>
            <MaterialCommunityIcons name="progress-upload" style={{fontSize:12,color:'white', alignSelf:'center'}}   onPress={(uri)=>uploadPhoto(item.uri)}/>
     
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
        fontSize:12,
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
