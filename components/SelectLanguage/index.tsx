import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {CarInfoType} from "../../types/CarInfoType";
import { selectLanguage } from "../../redux/reducers/appReducer";

interface ICarItem {
  carInfo: CarInfoType,
  navigation: any;
}

export default function SelectLanguage() {
  
  const language = selectLanguage();
  
  const pressHandler = () => {
    
  }

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.SelectLanguage}>
        <Text>{"Язык"}: {language}</Text>
      </View>
    </TouchableOpacity>
  );
}
