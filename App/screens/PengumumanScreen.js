// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PengumumanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Ronda Screen</Text>
      <Button
        title="Go to Pengumuman"
        onPress={(handlePengumuman) => navigation.navigate('Pengumuman')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    }
});

export default PengumumanScreen;
