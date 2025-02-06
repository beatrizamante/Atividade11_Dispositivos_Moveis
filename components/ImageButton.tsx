import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

type ImageButtonProps = {
  onPress: () => void;
};

export default function ImageButton({ onPress }: ImageButtonProps) {
  const { theme } = useTheme();
  const imageButtonSource =
    theme === "light"
      ? require("../assets/images/light/image_button.png")
      : require("../assets/images/dark/button_dark.png");

  return (
    <View style={[styles.button_container]}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={imageButtonSource} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: 345,
    height: 94,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});
