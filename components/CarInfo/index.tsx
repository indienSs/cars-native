import {useCallback} from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import {CarInfoType} from "../../types/CarInfoType";
import CustomButton from "../CustomButton";
import {sendWhatsAppMsg} from "../../utils/sendWhatsAppMsg";
import {makePhoneCall} from "../../utils/makePhoneCall";

interface ICarItem {
  carInfo: CarInfoType,
  language: string,
  translate: (word: string, lang: string) => string,
}

export default function CarInfo({carInfo, translate, language}: ICarItem) {
  const callbacks = {
    //Коллбэк для вызова
    onPressCall: useCallback(() => {
      makePhoneCall(carInfo.phone);
    }, [carInfo.phone]),
    //Коллбэк для отправки сообщения WhatsApp
    onPressWrite: useCallback(() => {
      sendWhatsAppMsg(carInfo.phone);
    }, [carInfo.phone]),
  };

  return (
    <View style={styles.CarInfo}>
      <Text>Категория: {carInfo.category}</Text>
      <Text>{carInfo.driver}</Text>
      <Text>{carInfo.phone}</Text>
      <View style={styles.buttons}>
        <CustomButton text={translate("Позвонить", language)} onPressHandler={callbacks.onPressCall} />
        <CustomButton text={translate("Написать", language)} onPressHandler={callbacks.onPressWrite} />
      </View>
    </View>
  );
}
