import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomText from "./src/components/Text/CustomText";
import colors from "./src/theme/colors";
import typography from "./src/theme/typography";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <Text>Font Loading...</Text>;
  }

  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
