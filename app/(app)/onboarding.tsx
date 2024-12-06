import { Colors } from "constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const Onboarding = () => {
  <Stack.Screen
    options={{
      headerShown: false,
    }}
  />;
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Onboarding</Text>
    </View>
  );
};
export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.textColor,
  },
});
