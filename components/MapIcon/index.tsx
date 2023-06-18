import {TouchableOpacity, Image} from "react-native";
import {styles} from "./styles";
import earth from "../../assets/earth.png"

interface ICustomButton {
  onPressHandler: () => void;
}

export default function MapIcon({onPressHandler}: ICustomButton) {
  return (
    <TouchableOpacity style={styles.MapIcon} onPress={onPressHandler}>
      <Image source = {earth} style={styles.image}/>
    </TouchableOpacity>
  );
}
