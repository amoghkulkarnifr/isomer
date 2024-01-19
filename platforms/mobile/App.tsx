import { useFonts } from "expo-font";
import { useEffect } from "react";

import { TamaguiProvider } from "@tamagui/core";
import appConfig from "./tamagui.config";
import { Text, XStack } from "tamagui";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={appConfig}>
      <XStack flex={1} justifyContent="center" alignItems="center">
        <Text>Hello from Tamagui</Text>
      </XStack>
    </TamaguiProvider>
  );
}
