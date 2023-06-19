import {Text} from "react-native";
import ItemLayout from "../../layouts/ItemLayout";

interface ICustomButton {
  onPressHandler?: () => void;
  language: string;
}

export default function LanguageSetter({onPressHandler, language}: ICustomButton) {
  return (
    <ItemLayout>
        <Text>Язык:</Text>
        <Text>{language}</Text>
    </ItemLayout>
  );
}
