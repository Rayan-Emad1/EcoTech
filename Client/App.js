import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackPages from "./Navigation/StackPages";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function App() {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackPages />
        </NavigationContainer>
      </SafeAreaProvider>
    // {/* </TouchableWithoutFeedback>  */}
  );
}
