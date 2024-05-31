import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BottomNavBar = ({ onTabPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButtonAcademia}
        onPress={() => onTabPress("Academia")}
      >
        <Text style={styles.tabText}>Academias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButtonPraca}
        onPress={() => onTabPress("Pracas")}
      >
        <Text style={styles.tabText}>Praças</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#141d22",
    borderBottomWidth: 1,
    borderBottomColor: "#141d22",
    paddingVertical: 10,
    paddingBottom: 20,
  },
  tabButtonAcademia: {
    flex: 1,
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },
  tabButtonPraca: {
    flex: 1,
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default BottomNavBar;
