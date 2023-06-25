import {TouchableOpacity, Image} from "react-native";
import {styles} from "./styles";
import earth from "../../assets/earth.png";
import {memo} from "react";

interface ICustomButton {
  onPressHandler: () => void;
}

function MapIcon({onPressHandler}: ICustomButton) {
  return (
    <TouchableOpacity style={styles.MapIcon} onPress={onPressHandler}>
      <Image source={earth} style={styles.image} />
    </TouchableOpacity>
  );
}

export default memo(MapIcon);
