import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import moment from "moment";
import "moment/locale/pt-br";
import { useRoute, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  moment.locale("pt-br");

  const currentDate = moment().format("dddd, D [de] MMMM");

  const route = useRoute();
  const navigation = useNavigation();
  const { userId } = route.params;

  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.9:8000/api/users/${userId}`
        );
        const user = await response.json();
        setUserName(user.nome);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleIconClick = () => {
    navigation.navigate("EditPage", {
      userId: userId,
      nome: userName,
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.person}>
              <View style={styles.greeting}>
                <Text style={styles.h3}>Olá, {userName}!</Text>
                <Text style={styles.h4}>Esta semana</Text>
              </View>
              <TouchableOpacity onPress={handleIconClick}>
                <FontAwesome5 name="user-circle" size={50} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.quadradoContainer}>
                <View style={[styles.quadrado, styles.corrida]}>
                  <Text style={styles.texto}>Corrida</Text>
                </View>
                <View style={[styles.quadrado, styles.academia]}>
                  <Text style={styles.texto}>Academia</Text>
                </View>
                <View style={[styles.quadrado, styles.outros]}>
                  <Text style={styles.texto}>Outros</Text>
                </View>
              </View>
              <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                  <Text style={styles.statsLabel}>Atividades</Text>
                  <Text style={styles.statsValue}>3</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statsBox}>
                  <Text style={styles.statsLabel}>Tempo</Text>
                  <Text style={styles.statsValue}>2h 45min</Text>
                </View>
              </View>
              <View style={styles.box}>
                <View style={styles.chartContainer}>
                  <Text>Gráfico de atividades</Text>
                  <FontAwesome5 name="chart-pie" size={100} color="black" />
                </View>
                <View style={styles.dateContainer}>
                  <View style={styles.verticalTextContainer}>
                    <Text style={styles.verticalText}>{currentDate}</Text>
                    <Text style={styles.fonte2}>Você não realizou</Text>
                    <Text style={styles.fonte2}>nenhuma atividade.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.mapContainer}>
                <Text>Academias perto de você:</Text>
                <FontAwesome5 name="map" size={100} color="black" />
                <Text style={styles.boldText}>
                  Clique no mini mapa e veja mais detalhes.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d22",
    width: "100%",
    height: "100%",
    paddingTop: 50,
  },
  contentContainer: {
    padding: 5,
  },
  card: {
    backgroundColor: "#141d22",
    borderRadius: 10,
    marginVertical: 10,
  },
  cardBody: {
    padding: 20,
  },
  person: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    flex: 1,
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  h3: {
    color: "white",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quadradoContainer: {
    flexDirection: "row",
  },
  quadrado: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
  },
  corrida: {
    backgroundColor: "orange",
  },
  academia: {
    backgroundColor: "blue",
  },
  outros: {
    backgroundColor: "green",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  statsLabel: {
    color: "white",
    fontSize: 16,
  },
  statsValue: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    height: "100%",
    width: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  chartContainer: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    width: 160,
    height: 160,
  },
  dateContainer: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    width: 160,
    height: 160,
  },
  boldText: {
    fontWeight: "bold",
  },
  verticalTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  verticalText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  fonte2: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 10,
  },
  mapContainer: {
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141d22",
  },
});

export default HomeScreen;
