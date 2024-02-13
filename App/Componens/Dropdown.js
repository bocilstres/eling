import React , { useState }from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Colors from '../Shared/Colors';

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState('option1'); // State untuk menyimpan nilai yang dipilih
  
    return (
      <View style={styles.DropDownPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.DropDownPicker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
    );
  };

const styles = StyleSheet.create({
  DropDownPicker: {
    width:315,
    borderRadius:30,
    marginTop:60,
    marginLeft:30,
    borderWidth:1,
    borderColor:Colors.darkBlue
  },
  text:{
    color:Colors.black,
  },
});

export default Dropdown;