import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {styles} from "../../layouts/FlexLayut/styles";
import {CarInfoType} from "../../types/CarInfoType";
import bus from "../../assets/bus.png";
import truck from "../../assets/truck.png";
import buldoser from "../../assets/buldoser.png";
import {useCallback} from "react";

const INITIAL_POSITION = {
  latitude: 52.531715,
  longitude: 103.88348,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

interface IMap {
  carItems: CarInfoType[];
}

export default function Map({carItems}: IMap) {
  //выбор иконки для отображения на карте
  const choseIcon = (car: CarInfoType) => {
    switch (car.category) {
      case "Грузовой":
        return truck;
      case "Пассажирский":
        return bus;
      case "Спецтранспорт":
        return buldoser;
      default:
        return bus;
    }
  };

  const callbacks = {
    //Рендер всех маркеров машин из списка на карте
    renderMarkers: useCallback(() => {
      return carItems.map(car => (
        <Marker
          key={String(car.position.latitude + car.position.longitude)}
          coordinate={{latitude: car.position.latitude, longitude: car.position.longitude}}
          image={choseIcon(car)}
        />
      ));
    }, [carItems]),
  };

  return (
    <MapView provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} style={styles.FlexLayout}>
      {callbacks.renderMarkers()}
    </MapView>
  );
}
