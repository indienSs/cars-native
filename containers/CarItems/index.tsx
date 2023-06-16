import {View, FlatList} from "react-native";
import CarItem from "../../components/CarItem";
import {CarInfoType} from "../../types/CarInfoType";

interface ICarItems {
  carInfo: CarInfoType[],
}

export default function CarItems({carInfo}: ICarItems) {
  return (
    <View>
      <FlatList
        data={carInfo}
        renderItem={({item}) => <CarItem carInfo={item} />}
        keyExtractor={car => car.position.longitude}
      />
    </View>
  );
}
