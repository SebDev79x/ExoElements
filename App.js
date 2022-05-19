import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import {  Header } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ThemeProvider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import { ListItem } from "@rneui/themed";
import ListStudents from './list.js'
import { render } from 'react-dom';
const App = () => {
 const state = {
    search: '',
  };
 const updateSearch = (search) => {
    this.setState({ search });
  };
    const { search } = state;
    const [value, setValue] = React.useState("");
  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <Header
      leftComponent={{ icon: 'menu', color: 'blanchedalmond' }}
      centerComponent={{ text: 'Apprenants La Manuelle', style: { color: 'blanchedalmond',fontWeight:'bold' } }}
      rightComponent={{ icon: 'home', color: 'blanchedalmond' }}
    />
     
    <SearchBar
      platform="default"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Tu cherches un truc ?"
      placeholderTextColor="blanchedalmond"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  
      <ListStudents/>
      <Button title="Push it!" />
    </ThemeProvider>
    </SafeAreaProvider>

  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
