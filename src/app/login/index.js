import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email && senha) {
      navigation.navigate("Main");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleRegister = () => {
    navigation.navigate("RegisterPage1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.minibackground}>
        <Text style={styles.pageInfo}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
          <Text style={{ color: "#141d22" }}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#141d22",
    justifyContent: "center",
  },
  minibackground: {
    backgroundColor: "white",
    zIndex: 1,
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },
  pageInfo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#141d22",
  },
  input: {
    height: 40,
    borderColor: "#141d22",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#141d22",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  registerBtn: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#141d22",
  },
});

export { LoginPage };
