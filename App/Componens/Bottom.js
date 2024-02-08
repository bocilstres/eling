import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome,faUser,faListAlt,faBullhorn,faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Colors from '../Shared/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DataScreen from '../screens/DataScreen';
import RondaScreen from '../screens/RondaScreen';

//Screen names
const HomeName = 'Home';
const ProfileName = 'Profile';
const DataName = 'Data';
const RondaName = 'Ronda';

const Tab = createBottomTabNavigator();


export default function Bottom() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          
          tabBarStyle: [
            {
              display: 'flex',
              height:65,
            },
          ],

          tabBarLabelStyle: [
            {
              fontSize:13,
              marginTop:10,
              marginBottom:5,

            },
          ],
          
          tabBarIconStyle: [
            {
              marginTop:15,
            },
          ],
          
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === HomeName) {
              iconName = focused ? faHome : faHome;
            } else if (route.name     === DataName) {
              iconName = focused ? faListAlt : faListAlt;
            } else if (route.name === ProfileName) {
              iconName = focused ? faUser : faUser;
            } else if (route.name     === RondaName) {
              iconName = focused ? faShieldHalved : faShieldHalved;
            }

            return <FontAwesomeIcon icon={iconName} size={20} color={color} />;
          },
        })}

      >
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={RondaName} component={RondaScreen} />
        <Tab.Screen name={DataName} component={DataScreen} />
        <Tab.Screen name={ProfileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

