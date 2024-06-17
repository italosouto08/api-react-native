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

const RegisterPage1 = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const etapa = 1;

  const handleProximo = () => {
    if (nome && idade && email) {
      navigation.navigate("RegisterPage2");
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
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={idade}
          onChangeText={(text) => setIdade(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
          keyboardType="default"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
          keyboardType="numeric"
        />
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
  input: {
    height: 40,
    borderColor: "#141d22",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#141d22",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
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
