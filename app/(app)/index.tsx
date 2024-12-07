import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.item1}>
          <View style={styles.card}>
            {/* Gradient Icon */}
            <View style={styles.iconContainer}>
              <Feather name="check-circle" size={24} color="white" />
            </View>
            <View
              style={{
                gap: 3,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 7,
                  backgroundColor: "#55565e",
                  borderRadius: 30,
                }}
              />
              <View
                style={{
                  width: 27,
                  height: 7,
                  backgroundColor: "#55565e",
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.item2}>
          <View style={styles.card}>
            {/* Gradient Icon */}
            <View style={styles.iconContainer}>
              <FontAwesome name="times" size={24} color="white" />
            </View>
            <View
              style={{
                gap: 3,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 7,
                  backgroundColor: "#55565e",
                  borderRadius: 30,
                }}
              />
              <View
                style={{
                  width: 27,
                  height: 7,
                  backgroundColor: "#55565e",
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/im1.png")}
            alt="Home image"
            style={styles.image}
          />
        </View>
      </SafeAreaView>
      <View style={styles.textContainer}>
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 45,
            fontFamily: "MontBold",
          }}
        >
          Let's Create motivation for your productivity
        </Text>
        <Link href={"/onboarding"} asChild>
          <Pressable
          //onPress={onPress} // Handles button press if standalone
          >
            <LinearGradient
              colors={["#6a11cb", "#2575fc"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.text}>Get Started</Text>
            </LinearGradient>
          </Pressable>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  wrapper: {
    flexDirection: "column",
    gap: 10,
  },
  item1: {
    // backgroundColor: Colors.secondary,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 50,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(56,54,84,.5)",
    borderRadius: 25,
    padding: 10,
    width: 150,
    height: 50,
  },
  iconContainer: {
    marginRight: 10,
  },
  iconCheck: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  item2: {
    // backgroundColor: Colors.secondary,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 23,
    marginTop: 25,
  },
  imageContainer: {
    // flex:1
  },
  image: {
    width: 400,
    height: 220,
    objectFit: "cover",
  },
  textContainer: {
    flex: 1,
    padding: 40,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
