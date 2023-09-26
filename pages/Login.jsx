import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Login page</Text>
      <TextInput onChangeText={(e)=>setEmail(e)} style={styles.input} placeholder="text@example.com" />
      <TextInput onChangeText={(e)=>setPassword(e)} style={styles.input} secureTextEntry placeholder="password" />
      <Button color={"#333"} title='Login' onPress={()=>{
        console.warn(email)
        console.warn(password)
      }}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  box:{
    flex:1,
    marginTop:100,
  },
  heading:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
export default Login;
