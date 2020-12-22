import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {Header} from './components/header.js';
import {ListItem} from "./components/list-item"
import {AddItem} from "./components/add-item"

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

  const addItem = (text) => {
    if (!text){
      Alert.alert("Error", "Please Enter an Item", {text: "Ok"})
    } else {
      setItems(prevItems => {
        return [{id:`${Math.random() * 100}`, text},...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
      <AddItem addItem={addItem}/>
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
