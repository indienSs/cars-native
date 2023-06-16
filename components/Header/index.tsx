import {View, Text, Image} from "react-native";
import {styles} from "./styles";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>Cars map api</Text>
      <Image source={require("../../assets/earth.png")} style={styles.image}/>
    </View>
  );
}
