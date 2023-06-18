import {Provider} from "react-redux";
import {store} from "./redux/store";
import DrawerNavigation from "./routes/drawer";

export default function App() {
  return (
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
  );
}
