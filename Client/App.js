import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackPages from "./Pages/Stack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackPages />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
