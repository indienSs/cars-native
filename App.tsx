import {StyleSheet, View} from "react-native";
import Header from "./components/Header";
import CarsList from "./pages/CarsList";
import {store} from "./redux/store";
import {Provider} from "react-redux";

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <CarsList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
  },
});
