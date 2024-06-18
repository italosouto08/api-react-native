import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

const Stack = createStackNavigator();

const RegisterPage1 = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const etapa = 1;

  const handleProximo = async () => {
    if (nome && idade && email) {
      try {
        const response = await axios.post(
          "http://192.168.1.9/api/users/register/step1",
          {
            nome,
            idade,
            email,
            senha,
            telefone,
          }
        );
        console.log(response.data);
        navigation.navigate("RegisterPage2", { userId: response.data._id });
      } catch (error) {
        alert("Erro ao cadastrar usuário: " + error.message);
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.minibackground}>
        <View style={styles.navControl}>
          <View style={styles.navInfo}>
            <Text style={styles.pageInfo}>Dados pessoais</Text>
          </View>
          <View style={styles.navNumber}>
            <Text style={styles.pageNumber}>Página {etapa} de 2</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            value={idade}
            onChangeText={(text) => setIdade(text)}
            keyboardType="numeric"
          />
        </View>

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
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleProximo}>
          <Text style={{ color: "white" }}>Próximo</Text>
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
  navControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  navInfo: {
    flex: 1,
  },
  pageInfo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  navNumber: {
    flex: 1,
    alignItems: "flex-end",
  },
  pageNumber: {
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
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
    marginTop: 30,
  },
  activityButton: {
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  activityButtonSelected: {
    backgroundColor: "#141d22",
    color: "white",
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activityText: {
    marginRight: 5,
  },
});

export { RegisterPage1 };
