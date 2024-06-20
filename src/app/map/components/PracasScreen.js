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
import pracasData from "../json/parquesEpracas.json";

const PracasScreen = () => {
  const [location, setLocation] = useState(null);
  const [pracas, setPracas] = useState([]);
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
    setTimeout(() => {
      setDataLoading(false);
      setPracas(pracasData.records);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
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
                pracas.map((praca, index) => (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: parseFloat(praca[11]),
                      longitude: parseFloat(praca[12]),
                    }}
                    title={praca[1]}
                    description={praca[10]}
                    pinColor="green"
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

export default PracasScreen;
