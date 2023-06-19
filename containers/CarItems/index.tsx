import {FlatList} from "react-native";
import CarItem from "../../components/CarItem";
import {CarInfoType} from "../../types/CarInfoType";
import FlexLayout from "../../layouts/FlexLayut";

interface ICarItems {
  carsInfo: CarInfoType[],
  navigation: any
}

export default function CarItems({carsInfo, navigation}: ICarItems) {

  const renderCarItem = ({item}: {item: CarInfoType}) => <CarItem carInfo={item} navigation={navigation}/>

  return (
    <FlexLayout>
      <FlatList
        data={carsInfo}
        renderItem={renderCarItem}
        keyExtractor={car => String(car.position.longitude + car.position.latitude)}
      />
    </FlexLayout>
  );
}

