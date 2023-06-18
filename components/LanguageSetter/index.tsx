import {TouchableOpacity, Image} from "react-native";
import {styles} from "./styles";
import earth from "../../assets/earth.png"

interface ICustomButton {
  onPressHandler: () => void;
}

export default function LanguageSetter({onPressHandler}: ICustomButton) {
  return (
    <TouchableOpacity style={styles.LanguageSetter} onPress={onPressHandler}>
      
    </TouchableOpacity>
  );
}
