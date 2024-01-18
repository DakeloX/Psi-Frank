import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NewPatient = ({ onPress }) => {
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="plus" size={32} color="white" />
        <Text style={styles.text}>Nuevo Paciente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    alignItems: "center",
    marginTop: 20, // Ajusta este valor según sea necesario
  },
  button: {
    width: 300, // Ancho del botón
    height: 60,
    backgroundColor: "#3498DB",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    borderRadius: 10, // Ajusta según sea necesario
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default NewPatient;