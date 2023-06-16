import {useState} from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import CategoryList from "../../components/CategoryList";

export default function CarsList() {
  const categories = ["Легковой", "Грузовой", "Спецтранспорт"];
  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  
  return (
    <View style={styles.CarsList}>
        <CategoryList categories={categories} chosen={chosenCategory} />
    </View>
  );
}
