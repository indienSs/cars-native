import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Header from "./components/Header";
import CarsList from "./pages/CarsList";

export default function App() {

  useEffect(() => {
    
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
  },
});
