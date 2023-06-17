import {ReactNode} from "react";
import {View} from "react-native";
import {styles} from "./styles";

interface IFlexLayout {
  children: ReactNode;
}

export default function FlexLayout({children}: IFlexLayout) {
  return <View style={styles.FlexLayout}>{children}</View>;
}
