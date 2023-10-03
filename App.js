import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import ListProduct from "./ListProduct";
import { useState } from "react";
import { TextInputExample } from "./TextInput";

const prodcts = [
  {
    id: 1,
    name: "Mario",
  },
  {
    id: 2,
    name: "Luigi",
  },
  {
    id: 3,
    name: "Peach",
  },
  {
    id: 4,
    name: "Toad",
  },
];
export default function App() {
  const {width, height} = useWindowDimensions()//para la dimension del dipositivo
  const [data, setData] = useState(prodcts);
  return (
    <View style={styles.container}>
    <Text style={styles.Title}>Personajes  de mario {width} / {height}</Text>
      <ListProduct style={styles.list} data={data}/>
      <TextInputExample />
        
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  Title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: '#f1f1f1',
  },
  
});

