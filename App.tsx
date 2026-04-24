import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

export type RootTabParamList = {
  Inicio: undefined;
  Perfil: undefined;
  Configuracion: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ color, size, focused }) => {
            let iconName: string;

            switch (route.name) {
              case "Inicio":
                iconName = focused ? "home" : "home-outline";
                break;

              case "Perfil":
                iconName = focused ? "desktop" : "desktop-outline";
                break;

              case "Configuracion":
                iconName = focused ? "settings" : "settings-outline";
                break;

              default:
                iconName = "help-outline";
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#6b7280",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: 6,
            paddingTop: 6,
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Configuracion" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;