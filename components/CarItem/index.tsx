import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {CarInfoType} from "../../types/CarInfoType";

interface ICarItem {
  carInfo: CarInfoType,
  navigation: any;
}

export default function CarItem({carInfo, navigation}: ICarItem) {
  
  const pressHandler = () => {
    navigation.navigate("CarScreen", carInfo);
  }

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.CarItem}>
        <View>
          <Text>ТС #{carInfo.id}</Text>
          <Text>{carInfo.driver}</Text>
        </View>
        <View>
          <Text style={styles.carInfo}>{carInfo.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
