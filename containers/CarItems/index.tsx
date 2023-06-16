import {View, FlatList} from "react-native";
import CarItem from "../../components/CarItem";
import {CarInfoType} from "../../types/CarInfoType";

interface ICarItems {
  carInfo: CarInfoType[],
}

export default function CarItems({carInfo}: ICarItems) {

  const renderCarItem = ({item}: {item: CarInfoType}) => <CarItem carInfo={item} />

  return (
    <View>
      <FlatList
        data={carInfo}
        renderItem={renderCarItem}
        keyExtractor={car => String(car.position.longitude + car.position.latitude)}
      />
    </View>
  );
}
