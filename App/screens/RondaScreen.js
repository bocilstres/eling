// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RondaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Ronda Screen</Text>
      <Button
        title="Go to Ronda"
        onPress={(handleRonda) => navigation.navigate('Ronda')}
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

export default RondaScreen;
