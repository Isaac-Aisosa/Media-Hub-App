import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
 //import MusicInfo from 'expo-music-info';
import { FlatList, StyleSheet, Text, View, Dimensions, ScrollView, ToastAndroid, Image, Pressable} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DocumentsList({ navigation })
 {
  const [docFiles, setDocFiles] = useState([]);
  const [docCount, setDocCount] = useState("0");
  const [loading, setLoading] = useState(true);

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
    if(media.totalCount != null){setLoading(false)}
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

    <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:10, borderRadius:5, height:30,textAlign:'center', flexDirection:'row', justifyContent:'center'}} onPress={(uri)=>uploadVideo(item.uri)}>
    <Text style={{color:'#fff', fontSize:14, textAlignVertical:'center'}}>({docCount}) Documents</Text>
    </Pressable>

    <ActivityIndicator animating={loading} style={{position:'absolute', alignSelf:'center', paddingVertical:50, marginTop:20}} size={50} color='#4287f5'/>
    
    <FlatList
      data={docFiles}
      keyExtractor={item => item.id}
      numColumns={3}
      renderItem={({ item }) => (
           <View style={{backgroundColor:'#fff', flex: 1,
        flexDirection: 'column',
         margin: 1,}}>
            <MaterialCommunityIcons name="file-document" style={{fontSize:100,color:'#000', justifyContent: 'center',
                          alignItems: 'center', }} />
       
          <View style={{flexDirection:'row',marginRight:20,}}>
           <Text numberOfLines={2} style={styles.videoTitle}>{item.filename}</Text>
           </View>
           <Text numberOfLines={1} style={styles.videoDuration}>{item.mediaType}</Text> 

           <Pressable style={{backgroundColor:'#4287f5', margin:10,marginTop:0, borderRadius:5, height:30, flexDirection:'row', justifyContent:'center'}}  onPress={(uri)=>uploadDoc(item.uri)}>
            <Text style={{color:'white', alignSelf:'center'}}>Upload</Text>
            <MaterialCommunityIcons name="progress-upload" style={{fontSize:12,color:'white', alignSelf:'center'}}    onPress={(uri)=>uploadDoc(item.uri)}/>
     
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
