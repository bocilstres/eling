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
    <View style={styles.container}>
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === HomeName) {
              iconName = focused ? faHome : faHome;
            } else if (route.name === DataName) {
              iconName = focused ? faListSquares : faListSquares;
            } else if (route.name === ProfileName) {
              iconName = focused ? faUser : faUser;
            }

            return <FontAwesomeIcon icon={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 16,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 19,
    width: "110%",
    height: "10%",
    backgroundColor: Colors.white, 
  },
});