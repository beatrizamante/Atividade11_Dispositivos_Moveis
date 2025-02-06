import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DarkThemeButton from './DarkThemeButton'
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
    const { toggleTheme, colors } = useTheme();  
  
  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColorFooter }]}>
      <DarkThemeButton onPress={toggleTheme}/>
      <Text style={[styles.text, { color: colors.textColorFooter }]}>We take you where you need to be...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 380, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 50
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#243046",
  }
})
