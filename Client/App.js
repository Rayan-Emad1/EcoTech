import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackPages from "./Navigation/StackPages";
import { Provider } from "react-redux";
import store from "./Redux/store";

// <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
// </TouchableWithoutFeedback>

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackPages />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
