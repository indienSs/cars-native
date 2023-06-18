import PageLayout from "../../layouts/PageLayout";
import CarInfo from "../../components/CarInfo";

interface ICarScreen {
  route: any;
}

export default function CarScreen({route}: ICarScreen) {
  const carInfo = route.params;

  return (
    <PageLayout>
      <CarInfo carInfo={carInfo} />
    </PageLayout>
  );
}
