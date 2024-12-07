import { useEffect } from "react";
import { Stack } from "expo-router";
import {
  PlayfairDisplaySC_700Bold as PlayBold,
  PlayfairDisplaySC_900Black as PlayBlack,
} from "@expo-google-fonts/playfair-display-sc";
import {
  MontserratAlternates_300Light as MontLight,
  MontserratAlternates_400Regular as MontRegular,
  MontserratAlternates_500Medium as MontMedium,
  MontserratAlternates_600SemiBold as MontSemi,
  MontserratAlternates_700Bold as MontBold,
  useFonts,
} from "@expo-google-fonts/montserrat-alternates";
import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
  const [loaded, error] = useFonts({
    MontLight,
    MontRegular,
    MontMedium,
    MontSemi,
    MontBold,
    PlayBold,
    PlayBlack,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
