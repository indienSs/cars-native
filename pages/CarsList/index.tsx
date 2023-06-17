import {useState} from "react";
import CategoryList from "../../components/CategoryList";
import CarItems from "../../containers/CarItems";
import PageLayout from "../../layouts/PageLayout";
import carInfo from "../../drivers-info.json"

export default function CarsList() {
  const categories = ["Все", "Легковой", "Грузовой", "Спецтранспорт"];
  const [chosenCategory, setChosenCategory] = useState(categories[0]);

  const onChoseCategory = (category: string) => {
    setChosenCategory(category);
  };

  return (
    <PageLayout>
      <CategoryList categories={categories} chosen={chosenCategory} onChoseCategory={onChoseCategory} />
      <CarItems carInfo={carInfo} />
    </PageLayout>
  );
}
