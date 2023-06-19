import {Linking, Alert} from "react-native";

export function sendWhatsAppMsg(phone: number | string, message = "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе") {
  const phoneNumber = String(phone).replace("+", "");
  message = message.trim().replaceAll(" ", " ");
  const url = `whatsapp://send?text=${message}&phone=${phoneNumber}`;
  if (phone) {
    Linking.openURL(url)
      .then(_ => {console.log("WhatsApp opened")})
      .catch(() => {Alert.alert("Установите WhatsApp")});
  }
}
