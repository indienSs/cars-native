import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: "Настройки"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}