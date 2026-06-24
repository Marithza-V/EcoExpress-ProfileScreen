import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Screen({children}: Props) {
  return (
    <View style={styles.screen}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f0f7f0",
        paddingVertical: 60,
        paddingHorizontal: 16,
        gap: 16,
  }
})