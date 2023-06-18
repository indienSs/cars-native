import {useState} from "react";
import CategoryList from "../../components/CategoryList";
import CarItems from "../../containers/CarItems";
import PageLayout from "../../layouts/PageLayout";
import carsInfo from "../../drivers-info.json";

interface ICarsListScreen {
  navigation: any
}

export default function CarsListScreen({navigation}: ICarsListScreen) {
  const categories = ["Все", "Пассажирский", "Грузовой", "Спецтранспорт"];
  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const [cars, setCars] = useState(carsInfo);
  const [changed, setChanged] = useState(false);

  const onChoseCategory = (category: string) => {
    setChosenCategory(category);
    setChanged(false);
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
      <CategoryList categories={categories} chosen={chosenCategory} onChoseCategory={onChoseCategory} />
      <CarItems carsInfo={cars} navigation={navigation}/>
    </PageLayout>
  );
}
