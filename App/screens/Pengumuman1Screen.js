// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Pengumuman1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Senin Screen</Text>
      <Button
        title="Go to Pengumuman1"
        onPress={(handlePengumuman1) => navigation.navigate('Senin')}
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

export default Pengumuman1Screen;
