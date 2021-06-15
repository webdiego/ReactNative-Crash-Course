import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import tailwind from "tailwind-rn";

import Header from "./components/header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "run", key: 2 },
    { text: "jump", key: 3 },
  ]);
  return (
    // CONTAINER
    <View style={tailwind(" w-full ")}>
      {/* HEADER */}
      <Header />
      <View>
        {/* TODO FORM */}

        {/* LIST */}
        <FlatList
          data={todos}
          renderItem={({ item }) => <Text style={tailwind("text-red-200 ")}>{item.text}</Text>}
          keyExtractor={(item) => item.key} 

        />
      </View>
    </View>

  );
}
