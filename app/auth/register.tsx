import { Colors } from "constants/Colors";
import { Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const Register = () => {
  const router = useRouter();
  <Stack.Screen
    options={{
      headerBackButtonMenuEnabled: true,
    }}
  />;
  const handleBack = () => {
    console.log("Back");
    router.back();
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButtonWrapper} onPress={handleBack}>
        <FontAwesome5 name="long-arrow-alt-left" size={24} color="white" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  backButtonWrapper: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.secondary,
    margin: 10,
  },
});
export default Register;
