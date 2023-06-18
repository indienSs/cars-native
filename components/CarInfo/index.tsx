import {View, Text} from "react-native";
import {styles} from "./styles";
import {CarInfoType} from "../../types/CarInfoType";
import CustomButton from "../CustomButton";

interface ICarItem {
  carInfo: CarInfoType,
}

export default function CarInfo({carInfo}: ICarItem) {

  const onPressCall = () => {}

  const onPressWrite = () => {}

  return (
      <View style={styles.CarInfo}>
        <Text>Категория: {carInfo.category}</Text>
        <Text>{carInfo.driver}</Text>
        <Text>{carInfo.phone}</Text>
        <View style={styles.buttons}>
          <CustomButton text="Позвонить" onPressHandler={onPressCall}/>
          <CustomButton text="Написать" onPressHandler={onPressWrite}/>
        </View>
      </View>
  );
}
