import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import BottomNavBar from "./components/navBarMap.js";
import AcademiaScreen from "./components/AcademiaScreen.js";
import PracasScreen from "./components/PracasScreen.js";

const Map = () => {
  const [activeTab, setActiveTab] = useState("Academia");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <BottomNavBar onTabPress={handleTabPress} />
      {activeTab === "Academia" ? <AcademiaScreen /> : <PracasScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d22",
  },
});

export default Map;
