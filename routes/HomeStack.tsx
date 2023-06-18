import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CarsListScreen from "../screens/CarsListScreen";
import CarScreen from "../screens/CarScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CarsListScreen" component={CarsListScreen} options={{title: "Экран списка ТС"}} />
        <Stack.Screen name="CarScreen" component={CarScreen} options={{title: "Экран ТС"}} />
        {/* <Stack.Screen name="Map" component={MapScreen} options={{title: "Карта"}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
