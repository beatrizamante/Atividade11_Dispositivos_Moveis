import { TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

type HamButtonProps = {
  onPress: () => void
  color: string;
};

export default function HamButton({ onPress, color = ""}: HamButtonProps) {

  return (
    <View>
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="moon-outline" size={40} color={color}></Ionicons>
        </TouchableOpacity>
      </View>
  );
}
