import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
import api from "./api";

const EditPage = ({ route, navigation }) => {
  const { userId } = route.params;
  const [userData, setUserData] = useState({
    nome: "",
    idade: "",
    email: "",
    telefone: "",
    altura: "",
    peso: "",
    praticaAtividadeFisica: false,
  });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        const user = response.data;
        setUserData({
          nome: user.nome,
          idade: user.idade.toString(),
          email: user.email,
          telefone: user.telefone,
          altura: user.altura?.toString() || "",
          peso: user.peso?.toString() || "",
          praticaAtividadeFisica: user.praticaAtividadeFisica,
        });
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error.message);
        alert("Erro ao buscar dados do usuário: " + error.message);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdate = async () => {
    if (userData.altura && userData.peso) {
      try {
        console.log("Dados enviados para atualização:", userData);
        await api.put(`/users/${userId}`, userData);
        alert("Atualizado com sucesso!");
        navigation.navigate("Home");
      } catch (error) {
        console.error(
          "Erro ao atualizar:",
          error.response ? error.response.data : error.message
        );
        alert(
          "Erro ao atualizar: " +
            (error.response ? error.response.data.message : error.message)
        );
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleDelete = async () => {
    setModalVisible(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/users/${userId}`);
      alert("Excluído com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao excluir:", error);
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      alert("Erro ao excluir: " + errorMessage);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.minibackground}>
          <View style={styles.navControl}>
            <View style={styles.navInfo}>
              <Text style={styles.pageInfo}>Editar dados físicos</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={userData.nome}
              onChangeText={(text) => setUserData({ ...userData, nome: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={userData.idade}
              onChangeText={(text) => setUserData({ ...userData, idade: text })}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={userData.email}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              value={userData.telefone}
              onChangeText={(text) =>
                setUserData({ ...userData, telefone: text })
              }
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Altura (cm)</Text>
            <TextInput
              style={styles.input}
              value={userData.altura}
              onChangeText={(text) =>
                setUserData({ ...userData, altura: text })
              }
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              value={userData.peso}
              onChangeText={(text) => setUserData({ ...userData, peso: text })}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.activity}>
            <Text style={styles.activityText}>Pratica atividade física?</Text>
            <TouchableOpacity
              style={[
                styles.activityButton,
                userData.praticaAtividadeFisica
                  ? styles.activityButtonSelected
                  : null,
              ]}
              onPress={() =>
                setUserData({ ...userData, praticaAtividadeFisica: true })
              }
            >
              <Text
                style={{
                  color: userData.praticaAtividadeFisica ? "white" : "black",
                }}
              >
                Sim
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                !userData.praticaAtividadeFisica
                  ? styles.activityButtonSelected
                  : null,
              ]}
              onPress={() =>
                setUserData({ ...userData, praticaAtividadeFisica: false })
              }
            >
              <Text
                style={{
                  color: !userData.praticaAtividadeFisica ? "white" : "black",
                }}
              >
                Não
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.btn, styles.btnSecondary]}
              onPress={handleDelete}
            >
              <Text style={{ color: "white" }}>Excluir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
              <Text style={{ color: "white" }}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja excluir este usuário?</Text>
            <View style={styles.modalButtons}>
              <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: "#3a506b" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  handleConfirmDelete();
                }}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: "#141d22" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d22",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
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
    width: "45%",
  },
  btnSecondary: {
    backgroundColor: "#3a506b",
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: "45%",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { EditPage };
