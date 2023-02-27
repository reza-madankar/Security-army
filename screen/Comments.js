import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import data from "../data";
const Comments = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const k = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.dis}>
      <Text style={styles.player2}>
        {data.player.map((item) => (
          <View style={styles.button}>
            <Text
              style={styles.btn}
              color="#999118"
              key={data.endCards}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </Text>
      {data.player.map((x) => (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <>
            <TouchableOpacity activeOpacity={1} onPress={k}>
              <Image
                style={styles.image}
                source={require("../assets/images/customer.jpg")}
              ></Image>
            </TouchableOpacity>
          </>
        </Modal>
      ))}
      <View>
        <Button
          color="orange"
          title="صفحه صاحب کافه"
          onPress={() => {
            navigation.navigate("صفحه صاحب کافه");
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  dis: { backgroundColor: "#3f3f3f" },
  player2: { marginTop: 20, backgroundColor: "#3f3f3f" },
  button: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    textAlign: "center",
    alignContent: "center",

    alignItems: "center",
  },
  mafia: {
    fontSize: 50,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  },
  btn: {
    fontSize: 45,
    color: "black",
    margin: 10,
    padding: 10,
    backgroundColor: "#999118",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 180,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "blue",
  },
  textStyle: {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
  },
  image1: {},
  image: {
    width: "100%",
    height: "100%",
  },
});
