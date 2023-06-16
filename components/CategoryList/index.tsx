import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";

interface ICategories {
  categories: string[];
  chosen: string;
  onChoseCategory: (category: string) => void;
}

export default function CategoryList(props: ICategories) {
  return (
    <View style={styles.CategoryList}>
      {props.categories.map(category => (
        <TouchableOpacity onPress={() => props.onChoseCategory(category)} key={category}>
          <Text style={category === props.chosen ? styles.chosen : styles.category}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
