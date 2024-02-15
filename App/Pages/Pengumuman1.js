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

const Pengumuman1Screen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const toggleBack = ()=> {
    console.log('Tombol Kembali Ke Home');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.containerTitle}>
      <TouchableOpacity onPress={toggleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} style={styles.BackIcon} iconPosition="top"/>
      </TouchableOpacity>
      <Text style={styles.datatxt}> PENGUMUMAN WARGA </Text>
      </View>  
      <View style={styles.containerSenin} > 
      <Text style={styles.anntxt}> PENGUMUMAN </Text>
      <Text style={styles.annnouncementtxt}> Assalamualaikum, Kpd seluruh warga Kp. Durian Runtuh bahwa besok pagi 
      yaitu Sabtu, 20 Januari 2025 akan melaksanakan Gotong Royong s/d. Selesai. Dimohon untuk partisipasi nya. 
      Terima Kasih atas perhatian saudara-saudari. Wassalamualaikum. </Text>
      </View>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    marginTop:45,
    backgroundColor:Colors.wet,
  },
  containerSenin:{
    height:800,
    alignItems:'center',
    backgroundColor:Colors.white,
    width:380,
    height:200,
    marginTop:10,
    marginBottom:255,
    marginLeft:20,
    borderRadius:10,
    borderWidth:2,
    borderColor:Colors.darkBlue,
    marginHorizontal:10,
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
    marginRight: 120,
    marginTop:5,
    marginBottom:5,
  },
  anntxt:{
    fontSize:18,
    fontWeight: 'normal',
    color: Colors.black,
    marginTop:20,
    marginBottom:20,
  },
  announcementtxt:{
    fontSize:18,
    fontWeight: 'normal',
    color: Colors.black,
    marginTop:90,
    marginBottom:5,
  },
});

export default Pengumuman1Screen;
