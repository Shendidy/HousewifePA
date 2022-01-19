import React from "react";
import { SafeAreaView, StatusBar, StatusBarStyle } from 'react-native'
import SafeViewAndroid from "./components/shared/SafeViewAndroid";
import SignedInStack from "./navigation";

export default function App() {
  return(
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {backgroundColor: 'black'}]}>
      <StatusBar barStyle="light-content" />
      <SignedInStack />
    </SafeAreaView>
  );
}




import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);