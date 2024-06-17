import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "./src/app/map/index";
import SettingsScreen from "./src/app/home/index";
import Main from "./src/app/home/index";
import { RegisterPage1 } from "./src/app/register/registerPage1";
import { RegisterPage2 } from "./src/app/register/registerPage2";
import Calendar from "./src/app/calendar/index";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dados pessoais"
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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Register" component={RegisterStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
