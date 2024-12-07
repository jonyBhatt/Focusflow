import { Colors } from "constants/Colors";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageSourcePropType,
  Pressable,
} from "react-native";

// Type definition for onboarding item
interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

// Onboarding data - replace with your actual content
const ONBOARDING_DATA: OnboardingItem[] = [
  {
    id: "1",
    title: "Productivity task",
    description: "Complete your task and get engage more with your work.",
    image: require("../../assets/workspace.png"), // Replace with your image
  },
  {
    id: "2",
    title: "Complete Tasks anywhere easily",
    description:
      "Boost your productive day by completing your daily tasks easily.",
    image: require("../../assets/workout.png"), // Replace with your image
  },
  {
    id: "3",
    title: "Manage From Phone",
    description: "Manage your task or quest everything from now in one tap",
    image: require("../../assets/health.png"), // Replace with your image
  },
];

// Screen dimensions
const { width, height } = Dimensions.get("window");

// Props type for the component
interface OnboardingScreenProps {
  onComplete?: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<OnboardingItem>>(null);

  const handleContinueWithEmail = () => {
    // Implement email continuation logic
    console.log("Continue with Email pressed");
    // Typically, you'd navigate to an email login/signup screen
    onComplete?.();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {ONBOARDING_DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  const renderOnboardingItem = ({ item }: { item: OnboardingItem }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={{
        flex:1,
        marginTop:30
      }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        renderItem={renderOnboardingItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
      />
      {renderPaginationDots()}
      <View style={styles.buttonWrapper}>
        <Pressable
          style={styles.continueButton}
          onPress={handleContinueWithEmail}
        >
          <Text style={styles.continueButtonText}>Continue with Email</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  container: {
    flex:1,
    backgroundColor: Colors.primary,
  },
  itemContainer: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginTop:50
  },
  title: {
    fontFamily: "PlayBold",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: Colors.textColor,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: "MontMedium",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#007BFF",
  },
  inactiveDot: {
    backgroundColor: "#E0E0E0",
  },
  continueButton: {
    width: "80%",
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
