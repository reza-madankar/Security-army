import {
  Button,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  Pressable,
} from "react-native";
import data from "../data";

const Cards = () => {
  return (
    <View style={styles.cards}>
      {data.endCards.map((item) => (
        <Button
          title={item.title}
          onPress={() => {
            Alert.alert(item.placeHolder);
          }}
        ></Button>
      ))}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cards: {
    textAlign: "center",
    justifyContent: "center",
  },
  image: {
    textAlign: "center",
    width: 120,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
