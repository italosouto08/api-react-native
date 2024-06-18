import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [activities, setActivities] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [status, setSelectedStatus] = useState("");
  const [color, setSelectedColor] = useState("");

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const storedActivities = await AsyncStorage.getItem("atividades");
        if (storedActivities !== null) {
          setActivities(JSON.parse(storedActivities));
        }
      } catch (error) {
        console.error("Failed to load activities", error);
      }
    };
    fetchActivities();
  }, []);

  const saveActivities = async (newActivities) => {
    try {
      setActivities(newActivities);
      await AsyncStorage.setItem("atividades", JSON.stringify(newActivities));
    } catch (error) {
      console.error("Failed to save activities", error);
    }
  };

  const renderCalendar = () => {
    const currYear = date.getFullYear();
    const currMonth = date.getMonth();
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, inactive: true });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push({ day: i, inactive: false });
    }

    return days;
  };

  const days = renderCalendar();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const handleDayPress = (day) => {
    if (day === null) {
      return;
    }
    setSelectedDay(day);
    setSelectedStatus("");
    setSelectedColor("");
  };

  const handleSave = () => {
    if (selectedDay !== null) {
      const key = `${currYear}-${currMonth + 1}-${selectedDay}`;
      const newActivities = {
        ...activities,
        [key]: status === "no" ? null : { status, color },
      };
      saveActivities(newActivities);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.currentDate}>
          {months[currMonth]} {currYear}
        </Text>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => setDate(new Date(currYear, currMonth - 1, 1))}
          >
            <Text style={styles.icon}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDate(new Date(currYear, currMonth + 1, 1))}
          >
            <Text style={styles.icon}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calendar}>
        <View style={styles.weeks}>
          {["D", "S", "T", "Q", "Q", "S", "S"].map((week, index) => (
            <Text key={index} style={styles.weekText}>
              {week}
            </Text>
          ))}
        </View>
        <FlatList
          data={days}
          numColumns={7}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.day,
                item.inactive && styles.inactiveDay,
                item.day === selectedDay && !item.inactive && styles.activeDay,
                item.day === currentDay &&
                  currMonth === currentMonth &&
                  currYear === currentYear && {
                    backgroundColor: "#efefef",
                  },
                activities[`${currYear}-${currMonth + 1}-${item.day}`]
                  ?.status === "yes" && {
                  backgroundColor:
                    activities[`${currYear}-${currMonth + 1}-${item.day}`]
                      ?.color,
                },
              ]}
              onPress={() => handleDayPress(item.day)}
            >
              {item.day !== null && (
                <Text
                  style={[
                    styles.dayText,
                    activities[`${currYear}-${currMonth + 1}-${item.day}`]
                      ?.status === "yes" && { color: "#fff" },
                  ]}
                >
                  {item.day}
                </Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.form}>
        <Text>Se exercitou?</Text>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue, itemIndex) => setSelectedStatus(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Escolha..." value="" />
          <Picker.Item label="Sim" value="yes" />
          <Picker.Item label="Não" value="no" />
        </Picker>
        <Text>Qual a cor dessa atividade?</Text>
        <Picker
          selectedValue={color}
          onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Escolha..." value="" />
          <Picker.Item label="Laranja" value="orange" />
          <Picker.Item label="Azul" value="blue" />
          <Picker.Item label="Verde" value="green" />
          <Picker.Item label="Roxo" value="purple" />
          <Picker.Item label="Vermelho" value="red" />
        </Picker>
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d22",
    paddingTop: 50,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentDate: {
    fontSize: 20,
    color: "#fff",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    color: "#fff",
    fontSize: 20,
    marginHorizontal: 10,
  },
  calendar: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  weeks: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weekText: {
    color: "#141d22",
    width: 30,
    textAlign: "center",
  },
  day: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 7.5,
    borderRadius: 15,
  },
  inactiveDay: {
    color: "white",
  },
  activeDay: {
    backgroundColor: "#efefef",
    color: "black",
  },
  dayText: {
    color: "#141d22",
  },
  form: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  dropdown: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Calendar;
