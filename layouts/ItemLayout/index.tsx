import {ReactNode} from "react";
import {View} from "react-native";
import {styles} from "./styles";

interface IItemLayout {
  children: ReactNode;
}

export default function ItemLayout({children}: IItemLayout) {
  return <View style={styles.ItemLayout}>{children}</View>;
}