import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../../Pro';
import Colors from '../Shared/Colors';

const Bottom = ({ }) => {
  const [selectedTab, setSelectedTab] = useState('home');

  const handleProfile = (Profile) => {
    setSelectedTab(Profile); // Update selectedTab state when a tab is pressed
  };
  const handleHome = (Home) => {
    setSelectedTab(Home); // Update selectedTab state when a tab is pressed
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Home' && styles.selectedTab]}
        onPress={() => handleHome ('Home')}>
        <Icon name="home" size={24} color={selectedTab === 'Home' ? Colors.white : Colors.darkBlue} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Profile' && styles.selectedTab]}
        onPress={() => handleProfile('Profile')}>
        <Icon name="user" size={24} color={selectedTab === 'Profile' ? Colors.white : Colors.darkBlue} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    elevation: 8, // Efek bayangan
    top:93,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  selectedTab: {
    backgroundColor: Colors.darkBlue, // Warna latar belakang saat tab dipilih
    height:50,
    borderRadius:50,
  },
});

export default Bottom;
