import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import ItemLayout from "../../layouts/ItemLayout";

interface ICustomButton {
  onPressHandler?: () => void;
  language: string;
}

export default function LanguageSetter({onPressHandler, language}: ICustomButton) {
  return (
    <ItemLayout>
        <Text style={styles.text}>Язык:</Text>
        <TouchableOpacity>
          <Text style={styles.text}>{language}</Text>
        </TouchableOpacity>
    </ItemLayout>
  );
}
