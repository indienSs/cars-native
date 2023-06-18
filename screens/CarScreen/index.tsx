import PageLayout from "../../layouts/PageLayout";
import CarInfo from "../../components/CarInfo";
import Map from "../../containers/Map";

interface ICarScreen {
  route: any;
}

export default function CarScreen({route}: ICarScreen) {
  const carInfo = route.params;

  return (
    <PageLayout>
      <CarInfo carInfo={carInfo} />
      {/* <Map /> */}
    </PageLayout>
  );
}
