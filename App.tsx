import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import { useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = useCallback(() => setLoading(false), []);
  const preload = useCallback(async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/logo.png"),
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
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
