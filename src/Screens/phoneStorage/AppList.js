import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
 //import MusicInfo from 'expo-music-info';
import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, ToastAndroid } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppsList({ navigation })
 {
  const [docFiles, setDocFiles] = useState([]);
  const [docCount, setDocCount] = useState("0");

    const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);

    if (permission.granted) {
      // we want to get all the Doc files
      getDocFiles();
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
      }

      if (status === 'denied' && !canAskAgain) {
        //   we want to display some error to the user
      }
    }
  };

  async () => {
    let result = await DocumentPicker.getDocumentAsync({
        type: "video/*" // all images files
    });
    console.log(result.uri);
    setFile(result.uri)
    setfilename(result.name)
    setFileMIME(result.mimeType);
    //alert(result.uri);
    

    
    }

  const getDocFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: 'unknown',
    });
    //console.log(media);

    media = await MediaLibrary.getAssetsAsync({
      mediaType: 'unknown',
      first: media.totalCount,
    });

    setDocFiles(media.assets);
    setDocCount(media.totalCount);
  };

  function uploadDoc(uri){ 
    // let metadata = MusicInfo.getMusicInfoAsync(uri, {
    //   title: true,
    //   artist: true,
    //   album: true,
    //   genre: true,
    //   picture: true  
    // });
    console.log('ssss')
    ToastAndroid.show('Uploading Doc to Media Hub ' + uri, ToastAndroid.LONG);
  };

  useEffect(() => {
    getPermission();
  }, []);
  
 return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" style='light'/> 
    <View style={{backgroundColor:'#fff', width:'100%',height:50, borderBottomWidth:0.3}}>
           <Text style={styles.Title}>({docCount}) Application</Text>
    </View>
    <FlatList
      data={docFiles}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        
        <View style={{backgroundColor:'#fff', width:'100%',height:80, borderBottomWidth:0.5, borderBottomColor:'#dedee3'}}>
          <View style={{flexDirection:'row',marginRight:20,}}>
          <MaterialCommunityIcons name="file-document" style={{fontSize:25,color:'#000', margin:10, marginRight:0}} />
           <Text numberOfLines={1} style={styles.videoTitle}>{item.filename}</Text>
           </View>
           <Text numberOfLines={1} style={styles.videoDuration}>{item.mediaType}</Text> 

           <MaterialCommunityIcons name="progress-upload" style={{fontSize:40,color:'red',
           position:'absolute', marginTop:35, alignSelf:'flex-end', paddingRight:20}}   onPress={(uri)=>uploadDoc(item.uri)}/>
     
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
        fontSize:18,
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
