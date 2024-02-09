import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../Shared/Colors';

export default class Dropdown extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          country: null,
          city: null,
          cities: []
      };
  }

  changeCountry(item) {
      let city = null;
      let cities;
      switch (item.value) {
          case 'fr':
              cities = [
                  {label: 'Paris', value: 'paris'}
              ];
          break;
          case 'es':
              cities = [
                  {label: 'Madrid', value: 'madrid'}
              ];
          break;
      }

      this.setState({
          city,
          cities
      });
  }

  changeCity(item) {
      this.setState({
          city: item.value
      });
  }

  render() {
      return (
          <>
              <DropDownPicker style={styles.DropDownPicker}
                  items={[
                      {label: 'France', value: 'fr'},
                      {label: 'Spain', value: 'es', selected: true},
                  ]}
                  defaultIndex={1}
                  defaultValue="France"
                  placeholder="Megawati Soekarno Poetri"
                  containerStyle={{height: 40}}
                  onChangeItem={item => this.changeCountry(item)}
              />
          </>
      );
  }
}

const styles = StyleSheet.create({
  DropDownPicker: {
    width:370,
    marginLeft:25,
    marginTop:60,
  },
});