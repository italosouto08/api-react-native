import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const Header = ({ onSearch }) => {
  return (
    <View style={styles.header}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Digite o bairro da academia"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={onSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  inputView: {
    backgroundColor: "white",
    zIndex: 1,
    top: 50,
    width: "min-content",
    backgroundColor: "#0081CF",
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    marginLeft: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#0081CF",
  },
  buttonText: {
    color: "white",
  },
});

export default Header;
