import { TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from "../contexts/ThemeContext";

type ThemeToggleProps = {
  onPress: () => void
};

export default function ThemeButton({ onPress }: ThemeToggleProps) {
  const { colors } = useTheme();  
  
  return (
    <View>
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="moon-outline" size={40} style={[styles.container, { color: colors.themeButtomColor }]} ></Ionicons>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5
  },
})

