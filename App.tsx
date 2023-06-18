import {registerRootComponent} from "expo";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import DrawerNavigator from "./routes/drawer";
import {NavigationContainer} from "@react-navigation/native";
import HomeStack from "./routes/homeStack";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Provider>
  );
}

registerRootComponent(App);
