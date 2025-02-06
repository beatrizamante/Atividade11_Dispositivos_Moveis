import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import DATA from "../services/data-passengers";
import ScrollList from "../components/ScrollList";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function list() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundSecondary }]}>
      <View>
        <Text style={[styles.title, { color: colors.textColorPrimary }]}>Vôos</Text>
      </View>
      <ScrollList data={DATA} />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    padding: 4,
    fontWeight: "semibold",
  },
});
