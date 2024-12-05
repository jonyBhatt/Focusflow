import Feather from "@expo/vector-icons/Feather";
import { Colors } from "constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "src/components/Button";
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
            source={require("../assets/im1.png")}
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
          }}
        >
          Let's Create motivation for your productivity
        </Text>
        <Button title="Get Started" />
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
  button: {},
});
