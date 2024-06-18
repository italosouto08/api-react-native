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

  const handleProximo = () => {
    if (altura && peso) {
      alert("Cadastrado com sucesso!");
      navigation.navigate("HomeScreen");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleVoltar = () => {
    navigation.goBack();
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Altura (cm)</Text>
          <TextInput
            style={styles.input}
            value={altura}
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={(text) => setPeso(text)}
            keyboardType="numeric"
          />
        </View>

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
            <Text
              style={{ color: !praticaAtividadeFisica ? "white" : "black" }}
            >
              Não
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.btn, styles.btnSecondary]}
            onPress={handleVoltar}
          >
            <Text style={{ color: "white" }}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleProximo}>
            <Text style={{ color: "white" }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
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
    width: "45%", // Ajuste de largura para os botões
  },
  btnSecondary: {
    backgroundColor: "#3a506b",
    marginRight: 10, // Espaço entre os botões
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
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
