import PageLayout from "../../layouts/PageLayout";
import CarInfo from "../../components/CarInfo";
import Map from "../../containers/Map";
import {CarInfoType} from "../../types/CarInfoType";
import {useSelector} from "react-redux";
import {selectLanguage} from "../../redux/reducers/appReducer";
import {translate} from "../../utils/translations/translate";

interface ICarScreen {
  route: any;
}

export default function CarScreen({route}: ICarScreen) {
  const carInfo: CarInfoType = route.params;
  const language = useSelector(selectLanguage);

  return (
    <PageLayout>
      <CarInfo carInfo={carInfo} translate={translate} language={language}/>
      <Map carItems={Array(carInfo)} tappableMarker={false} />
    </PageLayout>
  );
}
