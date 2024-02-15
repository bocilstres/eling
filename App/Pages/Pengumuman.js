import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldCat, faArrowLeft, faAddressCard, faShieldHalved, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Colors from '../Shared/Colors'
import { colors } from 'react-native-elements';

const PengumumanScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const toggleBack = () => {
    console.log('Tombol Kembali Ke Home Ditekan');
    navigation.navigate('Home');
  };
  const handlePengumuman1 = () => {
    console.log('Pengumuman1 pressed');
    navigation.navigate('Pengumuman1');
  };
  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.containerTitle}>
      <TouchableOpacity onPress={toggleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} style={styles.BackIcon} iconPosition="top"/>
      </TouchableOpacity>
      <Text style={styles.datatxt}> PENGUMUMAN </Text>
      </View> 
      <View style={styles.containerDashboard}>  
      <Text style={styles.anntxt}> PENGUMUMAN KEGIATAN </Text>
      <Text style={styles.annnouncementtxt}> Assalamualaikum, Kpd seluruh warga Kp. Durian Runtuh bahwa besok pagi 
      yaitu Sabtu, 20 Januari 2025 akan melaksanakan Gotong Royong s/d. Selesai. Dimohon untuk partisipasi nya. 
      Terima Kasih atas perhatian saudara-saudari. Wassalamualaikum. </Text>
      </View>
      <View style={styles.containerDashboard}>  
      <Text style={styles.anntxt}> PEMBERITAHUAN DUKA </Text>
      <Text style={styles.annnouncementtxt}> Assalamualaikum, Innalillahi Wa Inna Ilaihi Roji'un. Telah berpulang Kpd seluruh warga Kp. Durian Runtuh bahwa besok pagi 
      yaitu Sabtu, 20 Januari 2025 akan melaksanakan Gotong Royong s/d. Selesai. Dimohon untuk partisipasi nya. 
      Terima Kasih atas perhatian saudara-saudari. Wassalamualaikum. </Text>
      </View>
      <View style={styles.containerDashboard}>  
      <Text style={styles.anntxt}> PENGUMUMAN KEGIATAN </Text>
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
    backgroundColor: Colors.wet,
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    borderRadius:30,
    borderWidth:1,
    borderColor:Colors.darkBlue,
    height: 200,
    width:380,
    marginLeft: 22,
    marginTop:15,
    marginBottom:5,
  },
  buttonText:{
    fontSize:14,
    marginRight:150,
    color:Colors.darkBlue,
  },
  iconMenu:{
    alignItems:'flex-start',
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

export default PengumumanScreen;
