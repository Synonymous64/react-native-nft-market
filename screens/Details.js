import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
const Details = ({ route, navigation }) => {
  // console.log(route);
  const { data } = route.params;
  console.log(data);
  return <Text>Details</Text>;
};

export default Details;
// TODO 1:32:08
