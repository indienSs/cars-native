import { ReactNode } from "react";
import {View} from "react-native";
import {styles} from "./styles";

interface IPageLayout {
  children: ReactNode
}

export default function PageLayout({children}: IPageLayout) {
  return (
    <View style={styles.PageLayout}>
      {children}
    </View>
  );
}
