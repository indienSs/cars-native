import SettingsScreen from "../screens/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Главная",
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Настройки",
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="tools" color={color} size={size} />,
          title: "Настройки"
        }}
      />
    </Tab.Navigator>
  );
}
