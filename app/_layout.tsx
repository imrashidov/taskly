import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Shopping list", headerShown: true }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: true,
        }}
      />
      <Tabs.Screen name="idea" options={{ title: "Idea", headerShown: true }} />
    </Tabs>
  );
}
