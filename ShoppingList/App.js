import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "./components/header.js"

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"Shopping List"}></Header>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  text: {
    color: "darkslateblue",
    fontSize: 30
  }
})
export default App;
