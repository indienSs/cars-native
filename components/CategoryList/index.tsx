import {View, Text} from "react-native";
import {styles} from "./styles";

interface ICategories {
  categories: string[];
  chosen: string;
}

export default function CategoryList(props: ICategories) {
  return (
    <View style={styles.CategoryList}>
      {props.categories.map(category => (
        <Text key={category} style={category === props.chosen ? styles.chosen : styles.category}>
          {category}
        </Text>
      ))}
    </View>
  );
}
