import {useCallback} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {CarInfoType} from "../../types/CarInfoType";

interface ICarItem {
  carInfo: CarInfoType;
  navigation: any;
}

export default function CarItem({carInfo, navigation}: ICarItem) {
  
  const callbacks = {
    //Переход на экран просмотра информации об авто
    pressHandler: useCallback(() => {
      navigation.navigate("CarScreen", carInfo);
    }, [carInfo]),
  };

  return (
    <TouchableOpacity onPress={callbacks.pressHandler}>
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
