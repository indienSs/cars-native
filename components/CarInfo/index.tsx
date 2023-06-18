import {View, Text} from "react-native";
import {styles} from "./styles";
import {CarInfoType} from "../../types/CarInfoType";
import CustomButton from "../CustomButton";
import {sendWhatsAppMsg} from "../../utils/sendWhatsAppMsg";
import {makePhoneCall} from "../../utils/makePhoneCall";

interface ICarItem {
  carInfo: CarInfoType,
}

export default function CarInfo({carInfo}: ICarItem) {

  const onPressCall = () => {
    makePhoneCall(carInfo.phone);
  }

  const onPressWrite = () => {
    sendWhatsAppMsg(carInfo.phone);
  }

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
