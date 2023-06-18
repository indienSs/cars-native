import {View, Text} from "react-native";
import {styles} from "./styles";
import MapIcon from "../MapIcon";

interface ICustomButton {
  onPressHandler: () => void;
  mapVisible?: boolean;
}

export default function Header({onPressHandler, mapVisible = false}: ICustomButton) {
  return (
    <View style={styles.Header}>
      <Text>Экран ТС</Text>
      <MapIcon onPressHandler={onPressHandler}/>
    </View>
  );
}
