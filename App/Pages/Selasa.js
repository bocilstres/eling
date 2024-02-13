import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldCat, faArrowLeft, faAddressCard, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Table from '../Componens/Table';
import Colors from '../Shared/Colors'
import { colors } from 'react-native-elements';

const SelasaScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const toggleBack = ()=> {
    console.log('Tombol Kembali Ke Ronda Ditekan');
    navigation.navigate('Ronda');
  };

  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <ImageBackground  style={styles.bg}source={require('./../Assets/Images/bggggg.jpeg')}>
      <View style={styles.containerTitle}>
      <TouchableOpacity onPress={toggleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} style={styles.BackIcon} iconPosition="top"/>
      </TouchableOpacity>
      <Text style={styles.datatxt}> RONDA SELASA </Text>
      </View>  
      <View style={styles.containerSenin} > 
      <Table/>
            </View>
      </ImageBackground>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    marginTop:45,
    
  },
  containerSenin:{
    height:800,
    backgroundColor:Colors.white,
    width:380,
    height:500,
    marginTop:10,
    marginBottom:255,
    marginLeft:20,
    borderRadius:10,
  },
  containerTitle:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    flexDirection: 'row',
    marginBottom:1,
    justifyContent: 'space-between',
  },
  BackIcon:{
    color:Colors.navy,
    marginTop:5,
    marginBottom:5,
    justifyContent: 'flex-end',
    marginLeft:10,
  },
  datatxt:{
    fontSize:18,
    fontWeight: 'bold',
    color: Colors.navy,
    marginRight: 150,
    marginTop:5,
    marginBottom:5,
  },
});

export default SelasaScreen;
