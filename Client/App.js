import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackPages from "./Navigation/StackPages";
import { Provider } from "react-redux";
import store from "./Redux-components/store";
import registerNNPushToken from 'native-notify';


export default function App() {
  store.subscribe(() => console.log("Store Updated: ", store.getState()));
  registerNNPushToken(12578, 'wJIayC4Y0PfbCVsaKsZxN9');
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
