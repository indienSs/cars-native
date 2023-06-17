import {View, FlatList} from "react-native";
import CarItem from "../../components/CarItem";
import {CarInfoType} from "../../types/CarInfoType";
import FlexLayout from "../../layouts/FlexLayut";

interface ICarItems {
  carInfo: CarInfoType[],
}

export default function CarItems({carInfo}: ICarItems) {

  const renderCarItem = ({item}: {item: CarInfoType}) => <CarItem carInfo={item} />

  return (
    <FlexLayout>
      <FlatList
        data={carInfo}
        renderItem={renderCarItem}
        keyExtractor={car => String(car.position.longitude + car.position.latitude)}
      />
    </FlexLayout>
  );
}

