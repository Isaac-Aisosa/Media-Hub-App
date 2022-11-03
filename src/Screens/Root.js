import * as React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardIndex from './dashboardIndex'
import SetupIndex from './setupIndex'
import FileShareIndex from './fileSharingIndex'
import ActivityIndex from './activityIndex'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    
    <Tab.Navigator
    initialRouteName="Dashboard"
    tabBarOptions={{
        activeTintColor: '#eb0722',
        inactiveTintColor:'#000',

        style:{
           backgroundColor:'#fff',
           paddingBottom:5,
           paddingTop:5,
           borderTopColor:'#fff',
           height:60
        }
        
      }}

   >
      
      <Tab.Screen
        name="Dashboard"
        component={DashboardIndex}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={25} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Share"
        component={FileShareIndex}
        options={{
          headerShown: true,
          tabBarLabel: 'Share',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="swap-vertical-bold" color={color} size={25} />
          ),
        }}
      />


      <Tab.Screen
        name="Activity"
        component={ActivityIndex}
        options={{
          headerShown: true,
          tabBarLabel: 'Activities',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-network-outline" color={color} size={25} />
          ),
        }}
      />

     <Tab.Screen
        name="Setup"
        component={SetupIndex}
        options={{
          headerShown: false,
          tabBarLabel: 'Setup',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="youtube-studio" color={color} size={25} />
          ),
        }}
      />  
    </Tab.Navigator>

    

     





  );
}