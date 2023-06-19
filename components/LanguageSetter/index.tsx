import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import ItemLayout from "../../layouts/ItemLayout";
import {translate} from "../../utils/translations/translate";

interface ICustomButton {
  onPressHandler?: () => void;
  language: string;
}

export default function LanguageSetter({onPressHandler, language}: ICustomButton) {
  return (
    <ItemLayout>
      <Text style={styles.text}>{translate("Язык", language)}:</Text>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={styles.text}>{language}</Text>
      </TouchableOpacity>
    </ItemLayout>
  );
}
