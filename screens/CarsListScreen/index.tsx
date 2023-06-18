import {useCallback, useState} from "react";
import CategoryList from "../../components/CategoryList";
import CarItems from "../../containers/CarItems";
import PageLayout from "../../layouts/PageLayout";
import carsInfo from "../../drivers-info.json";
import Map from "../../containers/Map";
import MapIcon from "../../components/MapIcon";

interface ICarsListScreen {
  navigation: any;
}

export default function CarsListScreen({navigation}: ICarsListScreen) {
  const categories = ["Все", "Пассажирский", "Грузовой", "Спецтранспорт"];
  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const [cars, setCars] = useState(carsInfo);
  const [changed, setChanged] = useState(false);
  const [mapOpened, setMapOpened] = useState(false);

  const callbacks = {
    //Функция для выбора категории
    onChoseCategory: useCallback((category: string) => {
      setChosenCategory(category);
      setChanged(false);
    }, []),
    //Функция для открытия и закрытия карты
    onOpenMap: useCallback(() => {
      setMapOpened(prev => !prev);
    }, []),
  };

  if (chosenCategory !== "Все" && !changed) {
    setCars(carsInfo.filter(car => car.category === chosenCategory));
    setChanged(true);
  }

  if (chosenCategory === "Все" && !changed) {
    setCars(carsInfo);
    setChanged(true);
  }

  return (
    <PageLayout>
      <MapIcon onPressHandler={callbacks.onOpenMap} />
      {mapOpened ? (
        <Map>
          <Markers carsInfo={carsInfo} />
        </Map>
      ) : (
        <>
          <CategoryList categories={categories} chosen={chosenCategory} onChoseCategory={callbacks.onChoseCategory} />
          <CarItems carsInfo={cars} navigation={navigation} />
        </>
      )}
    </PageLayout>
  );
}
