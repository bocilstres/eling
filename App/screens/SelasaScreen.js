// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SelasaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Senin Screen</Text>
      <Button
        title="Go to Senin"
        onPress={(handleSelasa) => navigation.navigate('Senin')}
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

export default SelasaScreen;
