import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping list",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="lightbulb-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
