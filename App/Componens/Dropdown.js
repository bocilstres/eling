import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Shared/Colors';

const Dropdown = ({ options }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text>{selectedOption || 'Megawati Soekarno Poetri'}</Text>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownList}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelectOption(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  dropdownButton: {
    padding: 20,
    top: 60,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    borderRadius:10,
    borderRightColor:Colors.darkBlue,
    borderLeftWidth:15,
    width:300,
  },
  dropdownList: {
    position: 'absolute',
    top: 100,
    right: 0,
    left: 14,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor:Colors.darkBlue,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    marginTop:25,
    width:285,
  },
  option: {
    padding: 20,
    borderBottomColor: '#ccc',
  },
});

export default Dropdown;
