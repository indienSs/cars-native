import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

interface ICategories {
  categories: string[];
  chosen: string;
  onChoseCategory: (category: string) => void;
}

export default function CategoryList({categories, chosen, onChoseCategory}: ICategories) {
  return (
    <View style={styles.CategoryList}>
      {categories.map(category => (
        <TouchableOpacity onPress={() => onChoseCategory(category)} key={category}>
          <Text style={category === chosen ? styles.chosen : styles.category}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
