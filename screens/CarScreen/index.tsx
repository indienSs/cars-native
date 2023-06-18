import PageLayout from "../../layouts/PageLayout";
import CarInfo from "../../components/CarInfo";
import Map from "../../containers/Map";
import Markers from "../../containers/Markers";

interface ICarScreen {
  route: any;
}

export default function CarScreen({route}: ICarScreen) {
  const carInfo = route.params;

  return (
    <PageLayout>
      <CarInfo carInfo={carInfo} />
      <Map>
        <Markers carsInfo={Array(carInfo)} />
      </Map>
    </PageLayout>
  );
}
