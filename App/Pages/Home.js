import React , { useState, useEffect }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, bordercolor } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser, faTableCells, faTableList, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Bottom from '../Componens/Bottom';
import Colors from '../Shared/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout, getUser } from '../Api/user';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const handleLogout = async () => {
    try{
      const AccessToken = await getTokenFromStorage();
      console.log(AccessToken);
      if(AccessToken) {
        const logoutResult = await logout(AccessToken);
        if(logoutResult.message === 'Logout successful'){
          await AsyncStorage.removeItem("AccessToken");
          navigation.navigate('Login');
        }else{
          console.error('Logout Gagal', logoutResult);
        }
      }else{
        console.error('No token');
      }
    }catch(error){
      console.error('Logout',error)
    }
  };
  const getTokenFromStorage = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('AccessToken');
      return accessToken;
    } catch (error) {
      console.error('Error getting token from AsyncStorage:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://54bc-103-165-227-178.ngrok-free.app/usertoken';

      try {
        const token = await getTokenFromStorage();
        // console.log(token);

        // Sertakan token dalam parameter URL
        const apiUrlWithToken = `${API_URL}?token=${token}`;

        const response = await fetch(apiUrlWithToken, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        // console.log(result);
        if (result && result.length > 0 && result[0].payload && result[0].payload.length > 0) {
          const firstPayload = result[0].payload[0];
          const firstPayloadUsername = firstPayload.username;
    
          const cleanedUsername = firstPayloadUsername.replace(/"/g, '');
          setData(cleanedUsername);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleProfile = ()=> {
    console.log('Tombol Profile Di tekan');
    navigation.navigate('Profile');
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
    console.log('Tombol Pengumumna Di tekan');
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
        <Text style={styles.username}>Hi {data ? data : 'Loading...'}</Text>
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
              title="Data Warga"
              onPress={handleData}
              icon={<FontAwesomeIcon icon={faListAlt}  color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
            />
            <Button 
              title="Pengumuman"
              onPress={handlePengumuman}
              icon={<FontAwesomeIcon icon={faBullhorn} color={Colors.darkBlue} size={20} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="left"
            />
          </View>
          <View style={styles.Menurow}>
            <Button 
              title="Ronda"
              onPress={handleRonda}
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
    backgroundColor: Colors.white,  
    justifyContent: 'space-around',
    borderWidth:2,
    borderColor:Colors.darkBlue,
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
    backgroundColor:Colors.y,
    
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
  bg:{
    
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
    height: 491,
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
