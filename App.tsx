import AppLoading from "expo-app-loading";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import { useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./navigators/logged-out-nav";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = useCallback(() => setLoading(false), []);
  const preload = useCallback(async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/Instagram-name-logo-transparent-PNG.png"),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    Promise.all<Promise<void> | Promise<Asset[]>>([
      ...imagePromises,
      ...fontPromises
    ]);
  }, []);

  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}
