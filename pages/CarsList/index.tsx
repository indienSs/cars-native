import {useState} from "react";
import {View, Text} from "react-native";
import CategoryList from "../../components/CategoryList";
import CarItems from "../../containers/CarItems";

export default function CarsList() {
  const categories = ["Все", "Легковой", "Грузовой", "Спецтранспорт"];
  const [chosenCategory, setChosenCategory] = useState(categories[0]);

  const onChoseCategory = (category: string) => {
    setChosenCategory(category);
  };

  return (
    <View>
      <CategoryList categories={categories} chosen={chosenCategory} onChoseCategory={onChoseCategory} />
      {/* <CarItems carInfo={} /> */}
    </View>
  );
}
