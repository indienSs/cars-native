import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  CarItem: {
    height: 80,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 5,
    borderColor: "coral",
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carInfo: {
    textAlign: "right"
  },
});
