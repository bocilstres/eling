import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, bordercolor } from 'react-native';
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
  const handleHome = ()=> {
    console.log('Tombol Home Di tekan');
    navigation.navigate('Home');
  };
  const handleData = ()=> {
    console.log('Tombol Data Warga Di tekan');
    navigation.navigate('Data');
  };
  const handleRonda = ()=> {
    console.log('Tombol Ronda Di tekan');
    navigation.navigate('Ronda');
  };
  const handlePengumuman = ()=> {
    console.log('Tombol Pengumuman Di tekan');
    navigation.navigate('Pengumuman');
  };
  const toggleEmer = ()=> {
    console.log('Tombol Darurat di tekan');
    setModalVisible(!isModalVisible);
  }
  const toggleModal = () => {
    console.log('Tombol Batal Darurat di tekan');
    setModalVisible(!isModalVisible);
  };
  

   return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.row}>
      <Image style={styles.image} source={require('./../Assets/Images/hello.jpeg')}/>
        <Text style={styles.username}>Hi Mega</Text>
        <Text style={styles.subname}>Have a nice day.</Text>
      </View>

      <View style={styles.containerDashboard} >  
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <FontAwesomeIcon style={{ marginTop: 10 }} icon={faTriangleExclamation} size={70} color='#FFD43B' />
        <Text style={styles.textdarurat}>Tombol Darurat</Text>
      </TouchableOpacity>

        <View style={styles.Menu}>
          <View style={styles.Menurow}>
            <Button 
              onPress={handleData}
              icon={<FontAwesomeIcon icon={faListAlt}  color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
      
            </View>
             <View style={styles.Menurow}>
            <Button 
              onPress={handlePengumuman}
              icon={<FontAwesomeIcon icon={faBullhorn} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
            </View>
            <View style={styles.Menurow}>
             <Button 
              onPress={handleRonda}
              icon={<FontAwesomeIcon icon={faShieldHalved} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
            </View>
            <View style={styles.Menurow}>
            <Button 
              onPress={handleProfile}
              icon={<FontAwesomeIcon icon={faUser} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />

          </View>

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
  textbutton:{
    color:Colors.white,
    fontSize:25,
    marginBottom:7,
    marginTop:80,
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
    marginTop:10,
  },
  buttonMenu:{
    margin:10,
    width:360,
    height:50,
    borderRadius:50,
    backgroundColor: Colors.white,  
    borderWidth:1,
    borderColor:Colors.darkBlue,
    justifyContent:'space-around',
    
  },
  Menu:{
    alignItems:'center',
    height: windowHeight * 1
  },
  Menurow:{
    flexDirection: 'row',
  
  },
  container: {
    marginTop:45,
    backgroundColor:Colors.darkBlue,
    
  },
  row:{
    justifyContent:'space-around',
    backgroundColor: Colors.white,
    marginTop: 30,
    width: 360,
    height:windowHeight* 0.19,
    borderRadius: 20,
    marginBottom: 60,
    marginLeft:33,
    borderWidth:2,
    borderColor:Colors.darkBlue,

  },
  image:{
    marginTop:20,
    width: 130,
    height: 150,
    resizeMode: 'contain',
    marginTop:57,
    left: 200,
  },
  gtw:{
    marginLeft:70,
  },
  textdarurat:{
    color:Colors.white, 
    fontSize:15,
    marginBottom:30,
    marginTop: 3, 
  },
  textbutton:{
    color:Colors.darkBlue, 
    fontSize:15,
    marginTop: 30, 
    marginRight:90,
  },
  username:{
    fontSize:20,
    color:Colors.darkBlue,
    marginBottom: 98,
    marginLeft: 40,
    fontWeight: 'normal',
  },
  subname:{
    fontSize:15,
    color:Colors.darkBlue,
    marginBottom: 110,
    marginLeft: 40,
    fontWeight: 'normal',
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.wet, 
    height: 550,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  button: {
    alignItems:'center',
    backgroundColor: Colors.red,
    width: 360, 
    height:windowHeight* 0.13,
    borderRadius: 20,
    marginBottom: 20,
    marginTop:50, 
  },

});

export default HomeScreen;
