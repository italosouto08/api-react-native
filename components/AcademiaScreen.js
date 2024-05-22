import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import academiasData from "../json/academias.json";

const AcademiaScreen = () => {
  const [location, setLocation] = useState(null);
  const [academias, setAcademias] = useState([]);
  const [locationLoading, setLocationLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissão de localização não concedida",
          "Por favor, conceda permissão de localização para obter a localização."
        );
        setLocationLoading(false);
        return;
      }
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
      setLocationLoading(false);
    })();
  }, []);

  useEffect(() => {
    // Simular o carregamento dos dados por um breve período
    setTimeout(() => {
      setDataLoading(false);
      setAcademias(academiasData.records); // Definir os dados das academias
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      {locationLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        location && (
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Sua Localização"
                pinColor="red"
              />
              {!dataLoading &&
                academias.map((academia, index) => (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: parseFloat(academia[7]), // Latitude está na posição 7
                      longitude: parseFloat(academia[8]), // Longitude está na posição 8
                    }}
                    title={academia[1]} // Nome está na posição 1
                    description={academia[4]} // Bairro está na posição 4
                    pinColor="blue"
                  />
                ))}
            </MapView>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 1,
    zIndex: 0,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AcademiaScreen;
