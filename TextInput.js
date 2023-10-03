import { Text, SafeAreaView, TextInput, StyleSheet, Button, View } from "react-native";
import React, { useState } from "react";
import ListProduct from "./ListProduct";

export const TextInputExample = () => {
    const [text, onChangeText] = useState('');
    const [items, setItems] = useState([]); 
console.log(items);
    const addItem = () => {
      if (text.trim() !== "") {
        const newItem = {
          id: items.length + 6, 
          name: text,
        };
        setItems([...items, newItem]);
        onChangeText('');
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Escribe algo..."
        />
        <Button title="Agregar" onPress={addItem} />
        <ListProduct style={styles.list} data={items} />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    width: '100%',
  },
});
