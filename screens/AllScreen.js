import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  useColorScheme,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import AllBirthdays from "../components/AllBirthdays";

export default function AllScreen() {
  const colorScheme = useColorScheme();

  const textColor = colorScheme === "dark" ? "#fff" : "#000";
  const iconColor = colorScheme === "dark" ? "#fff" : "#000";
  const backgroundColor = colorScheme === "dark" ? "#232628" : "#fff";
  return (
    <View className="h-[100%]">
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <View className="px-6 pt-8">
        <Text className="font-bold text-[35px]" style={{ color: textColor }}>
          All
        </Text>
      </View>
      <AllBirthdays />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 200,
  },
});
