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
    // Lógica de autenticação
    if (email && senha) {
      // Navegar para a página principal ou dashboard após login bem-sucedido
      alert("Login realizado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Dados pessoais");
  };

  return (
    <View style={styles.container}>
      <View style={styles.minibackground}>
        <Text style={styles.pageInfo}>Login</Text>
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
        />
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

// Navegação principal
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Dados pessoais"
        component={RegisterPage1}
        options={{ title: "Cadastre-se" }}
      />
      <Stack.Screen
        name="RegisterPage2"
        component={RegisterPage2}
        options={{ title: "Informações Adicionais" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
