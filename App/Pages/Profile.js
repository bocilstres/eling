import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser, faArrowLeft, faPeopleRobbery, faPersonRifle, faPerson, faPortrait, faShieldCat } from '@fortawesome/free-solid-svg-icons';
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
      <ImageBackground  style={styles.bg}source={require('./../Assets/Images/bgggg.jpeg')}>
      <View style={styles.row}>
        <FontAwesomeIcon icon={faShieldCat} size={130} style={styles.profile}/>
      </View>
      <View style={styles.containerDashboard}>  
      <Text style={styles.NIK}>NIK :</Text>
      <Text style={styles.bio}>3204405202050002</Text>
      <Text style={styles.NIK}>Nama Lengkap :</Text>
      <Text style={styles.bio}>Megawati Soekarno Poetri</Text>
      <Text style={styles.NIK}>Nomor Telepon :</Text>
      <Text style={styles.bio}>08123456789</Text>
      </View>
      </ImageBackground>
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
  },
  bg:{
    width:500,
    height:737,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  profile:{
    alignItems: 'center',
    marginTop:100,
    color:Colors.white,
    marginRight:85,
    marginBottom:90,
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    height: 360,
    width:380,
    marginRight:80,
    marginTop:10,
  },
  NIK:{
    flexDirection: 'row',
    marginTop:25,
    fontSize:18,
    fontWeight: 'regular',
    marginBottom:11,
  },
  bio: {
    borderColor:Colors.darkBlue,
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 5,
    width:300,
    height:40,
    fontSize: 18,
    textAlign:'center',
    textAlignVertical:'center',
    color: Colors.darkBlue,
  },

});

export default ProfileScreen;
