import {View, Text} from "react-native";
import {styles} from "./styles";
import { CarInfoType } from "../../types/CarInfoType";

interface ICarItem {
  carInfo: CarInfoType,
}

export default function CarItem({carInfo}: ICarItem) {
  return (
    <View style={styles.CarItem}>
      <Text style={styles.title}>{carInfo.driver}</Text>
      <Text style={styles.title}>{carInfo.auto}</Text>
      <Text style={styles.title}>{carInfo.phone}</Text>
    </View>
  );
}
