import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";

export default function App() {
  const [name, setName] = useState("Diego");
  const [person, setPerson] = useState({ name: "Michelangelo", age: 27 });

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const changeName = () => {
    setName("Raffaello");
    setPerson({ name: "Donatello", age: 10 });
  };

  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bower", id: "7" },
  ]);
  return (
    <View style={styles.container}>
      {/* With flatList : 
      -we don't need specify the key/id because is automatically added it
      - better performance with big list
      - we don't have to use scroll view
      - render all the list and not just few and then the other as with ScrollView
      
      */}
      <FlatList
        data={people}
        //if we have id instead of key id with keyExtractor we set/replace it with the key
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item} key={item.key}>
            {item.name}
          </Text>
        )}
      />
    </View>

    //---------------FIRST PART----------------------
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Text style={styles.mainTitle}> Hello from ReactNative</Text>
    //     {/* STATE */}
    //     <View>
    //       <Text style={styles.title}>State</Text>
    //       <Text style={styles.text}>My name is {name}</Text>
    //       <Text style={styles.text}>This is my brother :{person.name} </Text>
    //     </View>
    //     <View style={styles.button}>
    //       <Button color="#ff5c5c" title="Change Name" onPress={changeName} />
    //     </View>

    //     {/* INPUTS */}
    //     <Text style={styles.title}>Text Input </Text>
    //     <Text style={styles.text}>Enter your name </Text>

    //     <TextInput
    //       // multiline
    //       // keyboardType
    //       style={styles.input}
    //       placeholder="Write here"
    //       onChangeText={(val) => setInputName(val)}
    //     />
    //     <View>
    //       <Text>Your name is : {inputName} </Text>
    //     </View>
    //     <Text style={styles.text}>Enter your age </Text>

    //     <TextInput
    //       keyboardType="number-pad"
    //       style={styles.input}
    //
    //     <Text>You have: {inputAge} </Text>
    //     {/* RENDER A LIST */}
    //     {people.map((item) => {
    //       return (
    //         <View>
    //           <Text style={styles.item} key={item.key}>
    //             {item.name}
    //           </Text>
    //         </View>
    //       );
    //     })}
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop:40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    backgroundColor: "red",
    margin: 8,
  },
  text: {
    textAlign: "center",
    margin: 2,
  },
  input: {
    width: 200,
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
  },
  item: {
    backgroundColor: "purple",
    color: "white",
    marginTop: 25,
    padding: 25,
    fontSize: 22,
    width: 140,
    margin: 10,
  },
});
