import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import helper, { Passenger } from "../services/data-helper";
import Line from "./Line";
import { useTheme } from "../contexts/ThemeContext";

type ListProps = {
  data: Passenger[];
};

export default function ScrollList({ data }: ListProps) {
  const DATA = helper(data);
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.passenger_name + index}
          renderItem={({ item }) => (
            <View
              style={[
                styles.container_passenger,
                { backgroundColor: colors.backgroundSecondary },
              ]}
            >
              <Image
                style={styles.avatar}
                source={{ uri: item.passenger_avatar }}
              />
              <View style={styles.passenger_info}>
                <Text
                  style={[
                    styles.infoTitles,
                    { color: colors.textColorPrimary },
                  ]}
                >
                  Nome:{" "}
                  <Text
                    style={[
                      styles.infoText,
                      { color: colors.textColorPrimary },
                    ]}
                  >
                    {item.passenger_name}
                  </Text>
                </Text>
                <View style={styles.row}>
                  <Text
                    style={[
                      styles.infoTitles,
                      { color: colors.textColorPrimary },
                    ]}
                  >
                    Origem:{" "}
                    <Text
                      style={[
                        styles.infoText,
                        { color: colors.textColorPrimary },
                      ]}
                    >
                      {item.origin}
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.infoTitles,
                      { color: colors.textColorPrimary },
                    ]}
                  >
                    Destino:{" "}
                    <Text
                      style={[
                        styles.infoText,
                        { color: colors.textColorPrimary },
                      ]}
                    >
                      {item.destination}
                    </Text>
                  </Text>
                </View>
                <Line />
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { category } }) => (
            <View style={styles.categories_container}>
              <Text style={[styles.categories, { color: colors.textColorPrimary }]}>{category}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    height: 755,
    padding: 10,
    marginVertical: 10,
  },
  container_passenger: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF",
    marginRight: 10,
  },
  passenger_info: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  infoTitles: {
    fontSize: 16,
    fontWeight: "400",
  },
  infoText: {
    fontSize: 14,
    fontWeight: "200",
  },
  categories: {
    fontSize: 18,
    fontWeight: "semibold",
    textDecorationLine: "underline",
  },
  categories_container: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
