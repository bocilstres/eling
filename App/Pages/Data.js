import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldCat, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
      <ImageBackground  style={styles.bg}source={require('./../Assets/Images/bggggg.jpeg')}>
      <View style={styles.containerTitle}>
      <TouchableOpacity onPress={toggleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} style={styles.BackIcon} iconPosition="top"/>
      </TouchableOpacity>
      <Text style={styles.datatxt}> DATA WARGA </Text>
      </View>  
      <FontAwesomeIcon icon={faShieldCat} size={130} style={styles.icon}/>
      <View style={styles.containerData}>
      <Dropdown style={styles.dropdown}/>
      </View>
      </ImageBackground>
      <Bottom />
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    marginTop:33,
    backgroundColor: Colors.navy,
  },
  username:{
    fontSize:20,
    color:Colors.white,
    marginBottom:30,
  },
  dropdown:{

  },
  icon:{
    color:Colors.white,
    marginRight:300,
    marginTop:100,
    marginBottom:90,
  },
  containerTitle:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    flexDirection: 'row',
    marginTop: 1,
    marginBottom:1,
    justifyContent: 'space-between',
  },
  containerData:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    height: 378,
    width:423,
    marginTop:10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
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
