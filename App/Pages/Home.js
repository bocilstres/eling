import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser, faTableCells, faTableList, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Bottom from '../Componens/Bottom';
import Colors from '../Shared/Colors'

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const handleProfile = ()=> {
    console.log('Tombol Profile Di tekan');
    navigation.navigate('Profile');
  };
  const handleData = ()=> {
    console.log('Tombol Data Warga Di tekan');
    navigation.navigate('Data');
  };
  const toggleEmer = ()=> {
    console.log('Tombol Telah DI tekan');
    setModalVisible(!isModalVisible);
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };



  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.containerDashboard}>  
      <View style={styles.row}>
      <Image style={styles.image} source={require('./../Assets/Images/hello.jpeg')}/>
        <Text style={styles.username}>Hi Username</Text>
      </View>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <FontAwesomeIcon style={{ marginTop: 10 }} icon={faTriangleExclamation} size={70} color='#FFD43B' />
        <Text style={styles.textdarurat}>Tombol Darurat</Text>
      </TouchableOpacity>

        <View style={styles.Menu}>
          <View style={styles.Menurow}>
            <Button 
              title="Data Warga"
              onPress={handleData}
              icon={<FontAwesomeIcon icon={faListAlt}  color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
            />
            <Button 
              title="Pengumuman"
              icon={<FontAwesomeIcon icon={faBullhorn} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
            />
          </View>
          <View style={styles.Menurow}>
            <Button 
              title="Ronda"
              icon={<FontAwesomeIcon icon={faShieldHalved} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
            />
            <Button 
              title="Go to Profile"
              onPress={handleProfile}
              icon={<FontAwesomeIcon icon={faUser} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
            />
          </View>
          <Bottom/>
        </View>

        <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5} 
        >

        <View style={styles.modalContent}>
        <FontAwesomeIcon style={{marginTop:20}} icon={faTriangleExclamation} size={150} color='#FFD43B' />
        <Text style={styles.textmodal}>Anda Yakin?</Text>
        <View style={styles.ButtonDarurat }>
          <TouchableOpacity style={styles.modalButton} onPress={toggleEmer}>
            <Text style={{fontSize:25, color:Colors.red }}>TEKAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={{fontSize:25}}>BATAL</Text>
          </TouchableOpacity>
        </View>
        </View>

      </Modal>
        
      </View>
      <Bottom />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  ButtonDarurat:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 30, 
  },
  textmodal:{
    color:Colors.white,
    fontSize:25,
    marginBottom:7,
    marginTop:2,
    alignItems: 'center',
  },
  modalButton: {
    flex: 1, 
    backgroundColor: 'white', 
    padding: 5,
    height: windowHeight *0.05,
    borderRadius: 10,
    marginHorizontal: 16, 
    marginTop: 1,
    alignItems: 'center', 
  },
  
  modalContent: {
    backgroundColor: Colors.red,
    alignItems: 'center',
    borderRadius: 20,
    height: windowHeight* 0.35

  },
  buttonText:{
    color:Colors.darkBlue,
    fontWeight: 'regular',
    
  },
  buttonMenu:{
    margin:10,
    width:windowWidth * 0.4,
    height:windowHeight * 0.1,
    borderRadius:20,
    backgroundColor: Colors.lightBlue,  
    justifyContent: 'space-around',
  },
  Menu:{
    alignItems:'center',
    height: windowHeight * 1
  },
  Menurow:{
    flexDirection: 'row',
    
  },
  container: {
    marginTop:33,
    backgroundColor: '#0F2167',
    
  },
  row:{
    justifyContent:'space-around',
    backgroundColor: Colors.white,
    marginTop: 20,
    width: 360,
    height:windowHeight* 0.19,
    borderRadius: 20,
    marginBottom: 60,
  },
  image:{
    marginTop:30,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop:57,
    left: 200,
  },
  textdarurat:{
    color:Colors.white, 
    fontSize:15,
    marginBottom:30,
    marginTop: 3, 
  },
  username:{
    fontSize:20,
    color:Colors.darkBlue,
    marginBottom: 120,
    marginLeft: 40,
    fontWeight: 'normal',
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.wet, 
    height: 744,
    windowWidth,
  },
  button: {
    alignItems:'center',
    backgroundColor: Colors.red,
    width: 360, 
    height:windowHeight* 0.13,
    borderRadius: 20,
    marginBottom: 20, 
  },

});

export default HomeScreen;
