import React from "react"
import { View, Text } from "react-native"

export const ListItem = ({item}) => {
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  )
}