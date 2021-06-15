import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function Header(){
 return(
   <View style={tailwind(' h-24 p-10 bg-red-400 flex-1 items-center text-center ')}>
     <Text style={tailwind('text-gray-200 font-extrabold text-2xl')}>My Todos</Text>
   </View>
 )

 
}