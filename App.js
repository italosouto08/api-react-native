import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import Map from "./src/app/map/index";
import HomeScreen from "./src/app/home/index";
import { RegisterPage1 } from "./src/app/register/registerPage1";
import { RegisterPage2 } from "./src/app/register/registerPage2";
import Calendar from "./src/app/calendar/index";
import { LoginPage } from "./src/app/login/index";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="RegisterPage1"
        component={RegisterPage1}
        options={{ title: "Dados Pessoais" }}
      />
      <Stack.Screen
        name="RegisterPage2"
        component={RegisterPage2}
        options={{ title: "Dados Fisicos" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Remove o cabeçalho do Tab.Navigator
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Map") {
              iconName = "map";
            } else if (route.name === "HomeScreen") {
              iconName = "home";
            } else if (route.name === "Calendar") {
              iconName = "calendar-today";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
