import {useCallback, useEffect, useState} from "react";
import CategoryList from "../../components/CategoryList";
import CarItems from "../../containers/CarItems";
import PageLayout from "../../layouts/PageLayout";
import carsInfo from "../../drivers-info.json";
import Map from "../../containers/Map";
import MapIcon from "../../components/MapIcon";
import {useSelector} from "react-redux";
import {selectCars, selectCategory, setCategory, setCars, selectLanguage} from "../../redux/reducers/appReducer";
import {useDispatch} from "react-redux";
import {translate} from "../../utils/translations/translate";

interface ICarsListScreen {
  navigation: any;
}

export default function CarsListScreen({navigation}: ICarsListScreen) {
  const dispatch = useDispatch();
  const chosenCategory = useSelector(selectCategory);
  const cars = useSelector(selectCars);
  const language = useSelector(selectLanguage);

  const categories = [
    translate("Все", "RU"),
    translate("Пассажирский", "RU"),
    translate("Грузовой", "RU"),
    translate("Спецтранспорт", "RU"),
  ];
  const [changed, setChanged] = useState(false);
  const [mapOpened, setMapOpened] = useState(false);
  const chosenCars =
    chosenCategory === translate("Все", "RU")
      ? cars
      : cars.filter(car => car.category === translate(chosenCategory, "RU"));

  useEffect(() => {
    dispatch(setCars(carsInfo));
  }, []);

  const callbacks = {
    //Функция для выбора категории
    onChoseCategory: useCallback((category: string) => {
      dispatch(setCategory(category));
      setChanged(false);
    }, []),
    //Функция для открытия и закрытия карты
    onOpenMap: useCallback(() => {
      setMapOpened(prev => !prev);
    }, []),
  };

  return (
    <>
      <MapIcon onPressHandler={callbacks.onOpenMap} />
      {mapOpened ? (
        <Map carItems={chosenCars} navigation={navigation} tappableMarker={true} />
      ) : (
        <PageLayout>
          <CategoryList categories={categories} chosen={chosenCategory} onChoseCategory={callbacks.onChoseCategory} />
          <CarItems carsInfo={chosenCars} navigation={navigation} />
        </PageLayout>
      )}
    </>
  );
}
