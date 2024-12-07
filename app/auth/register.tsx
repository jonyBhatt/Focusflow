import { Colors } from "constants/Colors";
import { Stack, useRouter } from "expo-router";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  Canvas,
  Circle,
  Group,
  Paint,
  useCanvasRef,
  vec,
} from "@shopify/react-native-skia";
import { useState } from "react";
const Register = () => {
  const borderWidthAnim = new Animated.Value(1);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const ref = useCanvasRef();
  <Stack.Screen
    options={{
      headerBackButtonMenuEnabled: true,
    }}
  />;
  const handleBack = () => {
    console.log("Back");
    router.back();
  };
  const handleFocus = (e: any) => {
    setIsFocused(true);
    Animated.timing(borderWidthAnim, {
      toValue: 2,
      duration: 200,
      useNativeDriver: false,
    }).start();

    // Call original onFocus if provided
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    Animated.timing(borderWidthAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    // Call original onBlur if provided
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButtonWrapper} onPress={handleBack}>
        <FontAwesome5 name="long-arrow-alt-left" size={24} color="white" />
      </Pressable>
      <View style={styles.wrapper}>
        <Text style={styles.title}>What's your email address?</Text>
        <View style={styles.formWrapper}>
          {/* <Text style={styles.formtext}>Your Email</Text> */}
          <Animated.View
            style={[
              styles.inputWrapper,
              {
                borderBottomWidth: borderWidthAnim,
                borderBottomColor: isFocused ? "#007BFF" : "#CCCCCC",
              },
            ]}
          >
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#AAAAAA"
              style={[styles.input]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Animated.View>
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue with Email</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    position: "relative",
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
  canvasStyle: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  wrapper: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: "column",
    gap: 50,
    height:"100%",
    flex:1
  },
  title: {
    fontSize: 41,
    fontFamily: "MontSemi",
    color: Colors.textColor,
  },
  formWrapper: {
    flexDirection: "column",
    gap: 5,
    flex:1
  },
  formtext: {
    fontSize: 20,
    color: "#6666",
    textTransform: "uppercase",
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingBottom: 5,
  },
  input: {
    fontSize: 16,
    color: "#333333",
    paddingHorizontal: 0,
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    elevation: 8,
    shadowColor: Colors.secondary,
  },
});
export default Register;
