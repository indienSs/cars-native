import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {styles} from "./styles";

interface ICustomButton {
  text: string;
  onPressHandler: () => void;
}

export default function CustomButton(props: ICustomButton) {
  return (
    <TouchableOpacity style={styles.CustomButton}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}
