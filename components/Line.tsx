import { View } from 'react-native'
import React from 'react'
import { useTheme } from '../contexts/ThemeContext';

export default function Line() {
    const { colors } = useTheme();
  
  return (
    <View style={{
        height: 1,
        backgroundColor: colors.textColorPrimary,
        alignSelf: 'stretch'
    }} />
  )
}