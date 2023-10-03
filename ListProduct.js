import { StyleSheet, FlatList } from "react-native";
import React from "react";
import ItemFake from "./ItemFake";

export default function ListProduct({ data }) {
  return <FlatList style={styles.Title} data={data} renderItem={({item}) => 
  <ItemFake name={item.name} />}/>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '',
    },
    Title: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: '#f1f1f1'
    },
    list: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: '#f1f1f1'
    },
  });