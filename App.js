import * as React from "react";
import { View, Text, SafeAreaView } from 'react-native'
import HomeScreen from "./screens/HomeScreen";
import SafeViewAndroid from "./components/shared/SafeViewAndroid";

export default function App() {
  return(
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <HomeScreen />
    </SafeAreaView>
  );
}
