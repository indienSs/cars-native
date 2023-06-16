import {View, Text, Image} from "react-native";
import {styles} from "./styles";
import earth from "../../assets/earth.png"

export default function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>Cars map api</Text>
      <Image source={earth}/>
    </View>
  );
}
