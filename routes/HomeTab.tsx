import SettingsScreen from "../screens/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import {translate} from "../utils/translations/translate";
import { selectLanguage } from "../redux/reducers/appReducer";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {

  const language = useSelector(selectLanguage);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: translate("Главная", language),
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: translate("Настройки", language),
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="tools" color={color} size={size} />,
          title: translate("Настройки", language),
        }}
      />
    </Tab.Navigator>
  );
}
