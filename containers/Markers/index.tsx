import {useCallback} from "react";
import {Marker} from "react-native-maps";
import {CarInfoType} from "../../types/CarInfoType";
import truck from "../../assets/truck.png";
import special from "../../assets/special.png";
import passengers from "../../assets/passengers.png";

interface IMarkers {
  carsInfo: CarInfoType[];
}

export default function Markers({carsInfo}: IMarkers) {
  
  const callbacks = {
    setIcon: useCallback((category: string) => {
      switch(category) {
        case "Грузовой":
          return truck;
        case "Пассажирский":
          return passengers;
        case "Спецтранспорт":
          return special;
        default: 
          return passengers;
      }
    }, [])
  }
  
  return carsInfo.map(car => (
    <Marker
      key={String(car.position.latitude + car.position.longitude)}
      coordinate={{
        latitude: car.position.latitude,
        longitude: car.position.longitude,
      }}
      image={callbacks.setIcon(car.category)}
    />
  ));
}
