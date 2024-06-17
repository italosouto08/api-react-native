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

const RegisterPage2 = ({ navigation }) => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [praticaAtividadeFisica, setPraticaAtividadeFisica] = useState(false);

  const etapa = 2;

  const handleVoltar = () => {
    navigation.goBack();
  };

  const handleProximo = () => {
    if (cpf && telefone) {
      alert("Formulário enviado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.minibackground}>
        <View style={styles.navControl}>
          <View style={styles.navInfo}>
            <Text style={styles.pageInfo}>Dados físicos</Text>
          </View>
          <View style={styles.navNumber}>
            <Text style={styles.pageNumber}>Página {etapa} de 2</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          value={altura}
          onChangeText={(text) => setAltura(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          value={peso}
          onChangeText={(text) => setPeso(text)}
          keyboardType="numeric"
        />
        <View style={styles.activity}>
          <Text style={styles.activityText}>Pratica atividade física?</Text>
          <TouchableOpacity
            style={[
              styles.activityButton,
              praticaAtividadeFisica ? styles.activityButtonSelected : null,
            ]}
            onPress={() => setPraticaAtividadeFisica(true)}
          >
            <Text style={{ color: praticaAtividadeFisica ? "white" : "black" }}>
              Sim
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.activityButton,
              !praticaAtividadeFisica ? styles.activityButtonSelected : null,
            ]}
            onPress={() => setPraticaAtividadeFisica(false)}
          >
            <Text style={{ color: !praticaAtividadeFisica ? "white" : "blue" }}>
              Não
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleProximo}>
          <Text style={{ color: "white" }}>Cadastrar</Text>
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

export { RegisterPage2 };
