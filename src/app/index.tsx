import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text className="font-light">Home</Text>
      <Redirect href="/(tabs)/home" />
    </View>
  );
}
