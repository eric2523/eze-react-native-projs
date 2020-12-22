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

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
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
