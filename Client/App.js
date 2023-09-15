import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackPages from "./Navigation/StackPages";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackPages/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
