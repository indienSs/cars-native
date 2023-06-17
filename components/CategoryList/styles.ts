import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  CategoryList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20
  },
  chosen: {
    color: "red",
    fontSize: 16,
  },
  category: {
    color: "black",
    fontSize: 16,
  }
});
