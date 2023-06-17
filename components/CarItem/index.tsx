import {View, Text} from "react-native";
import {styles} from "./styles";
import { CarInfoType } from "../../types/CarInfoType";

interface ICarItem {
  carInfo: CarInfoType,
}

export default function CarItem({carInfo}: ICarItem) {
  return (
    <View style={styles.CarItem}>
      <View>
        <Text>{carInfo.driver}</Text>
        <Text>{carInfo.phone}</Text>
      </View>
      <View>
        <Text style={styles.carInfo}>{carInfo.category}</Text>
        <Text style={styles.carInfo}>{carInfo.auto}</Text>
      </View>
    </View>
  );
}
