import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BottomNavBar = ({ onTabPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => onTabPress("Academia")}
      >
        <Text style={styles.tabText}>Academias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
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
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    paddingBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
});

export default BottomNavBar;
