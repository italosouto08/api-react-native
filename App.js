import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import BottomNavBar from "./components/navBarMap.js";
import AcademiaScreen from "./components/AcademiaScreen.js";
import PracasScreen from "./components/PracasScreen.js";

const App = () => {
  const [activeTab, setActiveTab] = useState("Academia");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <BottomNavBar onTabPress={handleTabPress} />
      {activeTab === "Academia" ? <AcademiaScreen /> : <PracasScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
