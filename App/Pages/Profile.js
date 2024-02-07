import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Bottom from '../Componens/Bottom';
import Colors from '../Shared/Colors'

const ProfileScreen= ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed'); 
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.row}>
        <Image style={styles.image} source={require('./../Assets/Images/k.png')}/>
      </View>
      <View style={styles.containerDashboard}>  
      <Text style={styles.NIK}>NIK :</Text>
      <Text style={styles.bio}>3204405202050002</Text>
      <Text style={styles.NIK}>Nama Lengkap :</Text>
      <Text style={styles.bio}>Megawati Soekarno Poetri</Text>
      <Text style={styles.NIK}>Nomor Telepon :</Text>
      <Text style={styles.bio}>08123456789</Text>
      </View>
      <Bottom/>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    marginTop:40,
    backgroundColor: Colors.navy,
    
  },
  row:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  image:{
    marginTop:30,
    width: windowWidth * 0.21,
    height:windowHeight* 0.10,
    resizeMode: 'contain',
    marginBottom:30,
    alignItems: 'center',
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    height: 606,
  },
  NIK:{
    flexDirection: 'row',
    marginTop:40,
    fontSize:18,
    fontWeight: 'regular',
    marginBottom:11,
  },
  bio: {
    borderColor:Colors.lightGray,
    backgroundColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    width: windowHeight * 0.4,
    fontSize: 20,
    textAlign: 'center',
  },

});

export default ProfileScreen;
