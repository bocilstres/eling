import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faList, faPerson, faSignOutAlt, } from '@fortawesome/free-solid-svg-icons';
import Colors from '../Shared/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DataScreen from '../screens/DataScreen';

//Screen names
const HomeName = 'Home';
const ProfileName = 'Profile';
const DataName = 'Data';

const Tab = createBottomTabNavigator();


export default function Bottom() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      initialRouteName={HomeName}
      screenOptions={({ route }) => ({

        
        
        tabBarIcon: ({focused, color, size}) => {
          let IconName;
          let rn = route.name;

          if (rn === HomeName) {
            IconName = faHome ? 'Home' : 'home-outline'
          } else if (rn === ProfileName) {
            IconName = faPerson ? 'Profile' : 'profile-outline';
          } else if (rn === DataName) {
            IconName = faList ? 'Data' : 'data-outline';
          }

          return <FontAwesomeIcon name={faPerson} size={size} color={color}/>
          
        },
      })}
        tabBarOptions={{
          "tabBarInactiveTintColor": "grey",
          "tabBarLabelStyle":{
            "paddingBottom": 10,
            "fontSize": 16
          },
          "tabBarStyle":[
            {
              "display": "flex",
            },
          ]
        }}

      >

        <Tab.Screen name={HomeName} component={HomeScreen}/>
        <Tab.Screen name={ProfileName} component={ProfileScreen}/>
        <Tab.Screen name={DataName} component={DataScreen}/>


      </Tab.Navigator>
    </NavigationContainer>
  );
}