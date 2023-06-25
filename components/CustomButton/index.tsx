import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {styles} from "./styles";
import { memo } from "react";

interface ICustomButton {
  text: string;
  onPressHandler: () => void;
}

function CustomButton(props: ICustomButton) {
  return (
    <TouchableOpacity style={styles.CustomButton} onPress={props.onPressHandler}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default memo(CustomButton);