import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Random = () => {
  const [number, setNumber] = React.useState("");
 
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.numberContainer}>
          <Text style={styles.text}>{number}</Text>
        </View>
        <Button title="get random number" onPress={() => getRandomNumber()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    padding: 80,
    borderRadius: 30,
    backgroundColor: "red",
  },
  numberContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
  },
});

export default Random;
