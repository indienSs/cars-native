import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CarsListScreen from "../screens/CarsListScreen";
import CarScreen from "../screens/CarScreen";
import {useSelector} from "react-redux";
import {selectLanguage} from "../redux/reducers/appReducer";
import {translate} from "../utils/translations/translate";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const language = useSelector(selectLanguage);

  return (
    <Stack.Navigator>
      <Stack.Screen name="CarsListScreen" component={CarsListScreen} options={{title: translate("Главная", language)}} />
      <Stack.Screen name="CarScreen" component={CarScreen} options={{title: translate("Информация", language)}} />
    </Stack.Navigator>
  );
}
