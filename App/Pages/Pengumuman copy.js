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
  const handleSenin = () => {
    console.log('Senin pressed');
    navigation.navigate('Senin');
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
      <Button 
              title="PENGUMUMAN"
              icon={<FontAwesomeIcon icon={faBullhorn}  color={Colors.darkBlue} size={30} />} 
              onPress={handleSenin}
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
              iconStyle={styles.iconMenu}
            />
            <Button 
              title="PENGUMUMAN"
              icon={<FontAwesomeIcon icon={faBullhorn}  color={Colors.darkBlue} size={30} />} 
              onPress={handleSenin}
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
              iconStyle={styles.iconMenu}
            />
            <Button 
              title="PENGUMUMAN"
              icon={<FontAwesomeIcon icon={faBullhorn}  color={Colors.darkBlue} size={30} />} 
              onPress={handleSenin}
              buttonStyle= {styles.buttonBawah}
              titleStyle={styles.buttonText}
              iconPosition="left"
              iconStyle={styles.iconMenu}
            />
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
  buttonMenu:{
    width:380,
    height:84,
    marginTop:15,
    alignItems:'center',
    marginLeft:25,
    marginBottom:1,
    borderRadius:10,
    backgroundColor:Colors.white,
    justifyContent:'space-around',
    borderWidth:1,
    borderColor:Colors.darkBlue,
  },
  buttonBawah:{
    width:380,
    height:84,
    marginTop:15,
    alignItems:'center',
    marginLeft:25,
    marginBottom:409,
    borderRadius:10,
    backgroundColor:Colors.white,
    justifyContent:'space-around',
    borderWidth:1,
    borderColor:Colors.darkBlue,
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
});

export default PengumumanScreen;
