import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldCat, faArrowLeft, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Colors from '../Shared/Colors'
import { colors } from 'react-native-elements';
import Dropdown from '../Componens/Dropdown';
import Bottom from '../Componens/Bottom';

const DataScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const toggleBack = ()=> {
    console.log('Tombol Kembali Ke Home Ditekan');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.containerTitle}>
      <TouchableOpacity onPress={toggleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} style={styles.BackIcon} iconPosition="top"/>
      </TouchableOpacity>
      <Text style={styles.datatxt}> DATA WARGA </Text>
      </View>  
      <View style={styles.row}>
      <FontAwesomeIcon icon={faAddressCard} size={130} style={styles.icon}/>
      </View>
      <View style={styles.containerData}>
      <Dropdown options={['Megawati Soekarno Poetri', 'Ganjar Pranowo', 'Puan Maharani']} />
      </View>
      <Bottom/>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    marginTop:33,
    backgroundColor: Colors.wet,
  },
  username:{
    fontSize:20,
    color:Colors.white,
    marginBottom:30,
  },
  dropdown:{
    marginRight:90,
  },
  row:{
    alignItems:'center',
  },
  icon:{
    alignItems: 'center',
    marginTop:45,
    color:Colors.darkBlue,
    marginBottom:45,
  },
  containerTitle:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    flexDirection: 'row',
    marginBottom:1,
    justifyContent: 'space-between',
  },
  containerData:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    borderRadius:30,
    borderWidth:1,
    borderColor:Colors.darkBlue,
    height: 360,
    width:380,
    marginLeft: 22,
    marginTop:10,
    marginBottom:119,
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
  selectedOption:{
    marginTop:10,
  }
});

export default DataScreen;
