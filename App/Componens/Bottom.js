import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,faUser, faDatabase, faList, faListSquares } from '@fortawesome/free-solid-svg-icons';
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
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === HomeName) {
              iconName = focused ? faHome : faHome;
            } else if (route.name     === DataName) {
              iconName = focused ? faListSquares : faListSquares;
            } else if (route.name === ProfileName) {
              iconName = focused ? faUser : faUser;
            }

            return <FontAwesomeIcon icon={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize:30,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
          ],
        }}
      >
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={DataName} component={DataScreen} />
        <Tab.Screen name={ProfileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

