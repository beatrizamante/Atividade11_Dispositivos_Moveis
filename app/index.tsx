import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import { router } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ImageButton from "../components/ImageButton";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function Login() {
  const { colors, theme } = useTheme();
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [err, setErr] = React.useState("");
  
  const imageSource = theme === 'light'
    ? require('../assets/images/light/login_light.png')
    : require('../assets/images/dark/login_dark.png');

  const handleLogin = () => {
    if (login === "fulano" && password === "123") {
      setErr("");
      router.replace("/Listagem");
    } else {
      setErr("Invalid Login.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <View
          style={[
            styles.container_up,
            { backgroundColor: colors.backgroundPrimary },
          ]}
        >
          <Text
            style={[styles.welcome_text, { color: colors.textColorPrimary }]}
          >
            Please, sign up to fly with us!
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.backgroundInputColor,
                color: colors.textColorSecondary,
              },
            ]}
            onChangeText={onChangeLogin}
            value={login}
            placeholder="Login"
            placeholderTextColor={colors.textColorSecondary}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.backgroundInputColor,
                color: colors.textColorSecondary,
              },
            ]}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            placeholderTextColor={colors.textColorSecondary}
          />
          {err ? (
            <Text
              style={[styles.error_text, { color: colors.textColorPrimary }]}
            >
              {err}
            </Text>
          ) : null}
        </View>
        <Image
          style={styles.middle_image}
          resizeMode="contain"
          source={imageSource}
        ></Image>
        <View
          style={[
            styles.container_down,
            { backgroundColor: colors.backgroundTertiary },
          ]}
        >
          <ImageButton
            onPress={handleLogin}
          />
        </View>
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_up: {
    height: 360,
    width: 380,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: 10,
  },
  container_down: {
    height: 360,
    width: 380,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 12,
    paddingBottom: 10,
  },
  input: {
    padding: 10,
    height: 50,
    width: 350,
    margin: 32,
    borderRadius: 15,
  },
  middle_image: {
    width: 350,
    height: 200,
    zIndex: 1
  },
  welcome_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error_text: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#B11818",
    padding: 8,
  },
});
