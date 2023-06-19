import {useCallback} from "react";
import {FlatList} from "react-native";
import CarItem from "../../components/CarItem";
import {CarInfoType} from "../../types/CarInfoType";
import FlexLayout from "../../layouts/FlexLayut";

interface ICarItems {
  carsInfo: CarInfoType[];
  navigation: any;
  language: string;
  translate: (word: string, lang: string) => string;
}

export default function CarItems({carsInfo, navigation, language, translate}: ICarItems) {
  const callbacks = {
    renderCarItem: useCallback(
      ({item}: {item: CarInfoType}) => (
        <CarItem carInfo={item} navigation={navigation} language={language} translate={translate} />
      ), [carsInfo]),
  };

  return (
    <FlexLayout>
      <FlatList
        data={carsInfo}
        renderItem={callbacks.renderCarItem}
        keyExtractor={car => String(car.position.longitude + car.position.latitude)}
      />
    </FlexLayout>
  );
}
