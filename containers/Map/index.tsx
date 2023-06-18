import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import FlexLayout from "../../layouts/FlexLayut";

const INITIAL_POSITION = {
  latitude: 52.531715,
  longitude: 103.88348,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function Map() {
  return (
    <FlexLayout>
      <MapView provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} />
    </FlexLayout>
  );
}
