import { View, Text, Linking, Image, StyleSheet } from "react-native";
import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function Sobre() {
  const { colors, theme } = useTheme();
  const openLink = () => {
    const url = "https://github.com/beatrizamante";
    Linking.openURL(url).catch((err) =>
      console.log("Not able to start link because: ", err)
    );
  };

  const imageSource = theme === 'light'
    ? require('../assets/images/light/about_light.png')
    : require('../assets/images/dark/about_dark.png');


  return (
    <View style={[style.container, { backgroundColor: colors.backgroundSecondary }]}>
      <View style={[style.container_up, { backgroundColor: colors.backgroundSecondary }]}>
        <Image
          source={require("../assets/profile_pic.png")}
          style={style.avatar}
        ></Image>
        <Text style={[style.name, { color: colors.textColorPrimary }]}>Beatriz Amante</Text>
        <LinkButton onPress={openLink}></LinkButton>
      </View>
      <View style={[style.container_down, { backgroundColor: colors.backgroundTertiary }]}>
        <Text style={[style.about_title, { color: colors.textColorSecondary }]}>Sobre:</Text>
        <Text style={[style.about_description, { color: colors.textColorSecondary }]}>
          Party Rock isn't in the house tonight!
        </Text>
        <Image
          source={imageSource}
          style={style.image}
        ></Image>
      </View>
      <Footer />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_up: {
    height: 360,
    width: 380,
    marginTop: 12,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container_down: {
    height: 360,
    width: 380,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 135,
    height: 135,
    borderRadius: 100,
  },
  name: {
    fontSize: 32,
  },
  about_title: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  about_description: {
    fontSize: 16,
  },
  image: {
    width: 380,
    height: 189,
  },
});
