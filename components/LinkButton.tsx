import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

type ImageButtonProps = {
  onPress: () => void;
};

export default function ImageButton({ onPress }: ImageButtonProps) {
  const { colors } = useTheme();

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.button, { borderColor: colors.textColorPrimary }]}>
        <Text style={[styles.text, { color: colors.textColorPrimary }]}>Link to GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 23,
    borderRadius: 45,
    borderColor: "#F6F1ED",
    borderWidth: 2,
  },
  text: {
    fontSize: 12,
    color: "#F6F1ED",
  },
});
