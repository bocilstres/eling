import React, { useState } from "react";
import { Button } from "@rneui/themed";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faShieldCat,
  faArrowLeft,
  faAddressCard,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import AppHeader from "../Componens/AppHeader";
import Colors from "../Shared/Colors";
import Table from "../Componens/Table";
import Scroll from "../Componens/Scroll";
import { colors } from "react-native-elements";
import Bottom from "../Componens/Bottom";

const RondaScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log("Logout pressed");
    navigation.navigate("Login");
  };
  const toggleBack = () => {
    console.log("Tombol Kembali Ke Home Ditekan");
    navigation.navigate("Home");
  };
  const handleSenin = () => {
    console.log("Senin pressed");
    navigation.navigate("Senin");
  };
  const handleSelasa = () => {
    console.log("Selasa pressed");
    navigation.navigate("Selasa");
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
        <Text style={styles.datatxt}> JADWAL RONDA </Text>
      </View>
      
          <View style={styles.containerSenin}>
            <Table />
          </View>
       
      <Bottom />
    </View>
  );
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    backgroundColor: Colors.wet,
  },
  containerSenin: {
    height: 800,
    backgroundColor: Colors.white,
    width: 380,
    height: 730,
    marginTop: 10,
    marginBottom: 255,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
  },
  containerTitle: {
    alignItems: "center",
    color: Colors.white,
    backgroundColor: Colors.white,
    flexDirection: "row",
    marginBottom: 1,
    justifyContent: "space-between",
  },
  BackIcon: {
    color: Colors.navy,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "flex-end",
    marginLeft: 10,
  },
  datatxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.navy,
    marginRight: 150,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default RondaScreen;
