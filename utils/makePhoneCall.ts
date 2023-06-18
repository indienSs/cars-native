import {Linking, Platform} from "react-native";

export function makePhoneCall(phone: string | number) {
  if (Platform.OS !== "android") {
    Linking.openURL(`telprompt:${phone}`);
  } else {
    Linking.openURL(`tel:${phone}`);
  }
}
