import React , { useState, useEffect }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldCat, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Bottom from '../Componens/Bottom';
import Colors from '../Shared/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen= ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    NIK: '',
    NamaLengkap: '',
    NomorTelepon: '',
    // Tambahkan properti lain sesuai kebutuhan
  });

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
      const API_URL = 'https://54bc-103-165-227-178.ngrok-free.app/tokenwarga';

      try {
        const token = await getTokenFromStorage();
        // console.log(token);

        const apiUrlWithToken = `${API_URL}?token=${token}`;

        const response = await fetch(apiUrlWithToken, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        const hasil = result[0].payload;
        const getall = hasil[0];
        setData({
          NIK: getall.nik || '',
          NamaLengkap: getall.nama_lengkap || '',
          NomorTelepon: getall.no_telepon || '',
          // Sesuaikan properti lainnya
        });

     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed'); 
    navigation.navigate('Login');
  };
  const toggleBack = () => {
    console.log('Tombol Kembali Ke Home Ditekan');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>

      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.containerTitle}>
        <TouchableOpacity onPress={toggleBack}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={24}
            style={styles.BackIcon}
            iconPosition="top"
          />
        </TouchableOpacity>
        <Text style={styles.datatxt}> PROFILE </Text>
      </View>
  
      <View style={styles.row}>
        <FontAwesomeIcon icon={faShieldCat} size={130} style={styles.profile}/>
      </View>
      <View style={styles.containerDashboard}>  
      <Text style={styles.NIK}>NIK :</Text>
      <Text style={styles.bio}>{data.NIK}</Text>
      <Text style={styles.NIK}>Nama Lengkap :</Text>
      <Text style={styles.bio}>{data.NamaLengkap}</Text>
      <Text style={styles.NIK}>Nomor Telepon :</Text>
      <Text style={styles.bio}>{data.NomorTelepon}</Text>
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
    backgroundColor: Colors.wet,
    
  },
  datatxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.navy,
    marginRight: 180,
    marginTop: 5,
    marginBottom: 5,
  },
  BackIcon: {
    color: Colors.navy,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "flex-end",
    marginLeft: 10,
  },
  containerTitle: {
    alignItems: "center",
    color: Colors.white,
    backgroundColor: Colors.white,
    flexDirection: "row",
    marginBottom: 1,
    justifyContent: "space-between",
  },
  profile:{
    marginTop:100,
    color:Colors.darkBlue,
    marginLeft:140,
    marginBottom:90,
  },
  containerDashboard:{
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
    marginBottom:46,
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
