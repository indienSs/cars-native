import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {store} from "./redux/store";
import HomeTab from "./routes/HomeTab";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeTab />
      </Provider>
    </NavigationContainer>
  );
}
