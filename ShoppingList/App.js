import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header} from './components/header.js';
import {ListItem} from "./components/list-item"

const App = () => {
  const [items, setItems] = useState([
    {id: `${Math.random() * 100}`, text: 'Milk'},
    {id: `${Math.random() * 100}`, text: 'Eggs'},
    {id: `${Math.random() * 100}`, text: 'Bread'},
    {id: `${Math.random() * 100}`, text: 'Juice'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});

export default App;
