import PageLayout from "../../layouts/PageLayout";
import CarInfo from "../../components/CarInfo";
import Map from "../../containers/Map";
import {CarInfoType} from "../../types/CarInfoType";

interface ICarScreen {
  route: any;
}

export default function CarScreen({route}: ICarScreen) {
  const carInfo: CarInfoType = route.params;

  return (
    <PageLayout>
      <CarInfo carInfo={carInfo} />
      <Map carItems={Array(carInfo)}/>
    </PageLayout>
  );
}
