import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
      <Tab.Navigator >
        <Tab.Screen name="Главная" component={HomeStack} options={{headerShown: false}}/>
        <Tab.Screen name="Настройки" component={HomeStack} />
      </Tab.Navigator>
  );
}