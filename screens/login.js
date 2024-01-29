import * as React from "react";
import MainAppbar from "../components/MainAppbar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [ShowError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (formData.username.length > 0 && formData.password.length > 8) {
      setFormData({ username: "", password: "" });
    } else {
      setShowError(true);
    }
  };
  return (
    <>
      <MainAppbar title="Login" />
      <View style={StyleSheet.container}>
        <TextInput
          label="Username"
          style={styles.input_field}
          value={formData.username}
          onChangeText={(text) => setFormData({ ...formData, username: text })}
          error={formData.username === 0 && ShowError}
        />
        <TextInput
          label="Password"
          style={styles.input_field}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          keyboardType="visible-password"
          error={formData.password.length < 8 && ShowError}
        />
        <Button mode="contained" style={styles.button} onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: 24,
  },
  input_field: {
    backgroundColor: "fcfcfc",
    margin: (16, 8, 16, 8),
  },
  button: {
    margin: (16, 8, 0, 8),
  },
});
