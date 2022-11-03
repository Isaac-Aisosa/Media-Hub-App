import React, { useState, useEffect } from 'react';
import { 
        StyleSheet, Text, View, 
        Image,Button,TextInput, Platform, 
        ToastAndroid, ScrollView,StatusBar, 
        Pressable,BackHandler,Dimensions
         
      } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Setup({ navigation })
 {
  
 return (
    <View style={styles.container}>
   <StatusBar translucent backgroundColor="red" barStyle={'light-content'}/>
    <View style={{backgroundColor:'red', width:'100%', height:80}}>
     <View style={{marginTop:35,flexDirection:'row',alignSelf:'center'}}>
        <MaterialCommunityIcons name="cogs" style={{fontSize:30,color:'#fff'}} />
       <Text style={{fontSize:20,color:'#fff',fontWeight:'normal', marginLeft:10}}>Media Hub Setup</Text>
     </View>
    </View>
    <ScrollView >

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('WiffiSetup')}>
   <MaterialCommunityIcons name="wifi" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Wiffi Setup{'\n'}
   <Text style={{fontSize:15,color:'#cccccc',fontWeight:'normal'}}>Set wiffi credentials...</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}}  onPress={()=>navigation.navigate('BluetoothSetup')}>
   <MaterialCommunityIcons name="speaker-bluetooth" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Bluetooth Setup{'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Set bluetooth credentials...</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}}  onPress={()=>navigation.navigate('AudioSetup')}>
   <MaterialCommunityIcons name="tune-vertical" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Audios Setup{'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Make chances to audio settings...</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('DisplaySetup')}>
   <MaterialCommunityIcons name="palette" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Display Setup{'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Change theme settings...</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('DeviceStatus')}>
   <MaterialCommunityIcons name="tablet-cellphone" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Device Status{'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>Media hub status, properties...</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('AdminSetup')}>
   <MaterialCommunityIcons name="account-cog" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>Admin Setup{'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>auth and permissions...</Text></Text>
   </Pressable>

   <Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('AboutDevice')}>
   <MaterialCommunityIcons name="information" style={{fontSize:40,color:'#140275'}} />
   <Text style={{fontSize:18,color:'#000',fontWeight:'bold', marginLeft:10}}>About{'\n'}
   <Text style={{fontSize:14,color:'#cccccc',fontWeight:'normal'}}>About device....</Text></Text>
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
