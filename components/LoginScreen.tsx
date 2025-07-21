import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <TextInput
        placeholder="E-mail or phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

    
    <Text style={styles.or}>OR</Text>

     <Pressable style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Pressable>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
      
    marginBottom: 32,
    marginTop:23,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  or: {
    fontSize: 22,
    marginBottom: 32,
    marginTop: 32,
    textAlign: 'center',
   

    },

  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
     borderRadius: 25,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    borderRadius: 25,
    padding: 100 ,
    marginTop: 32,

  },
  button1: {
  backgroundColor: 'blue',
    paddingVertical: 14,
    borderRadius: 25,
    padding: 100 ,
  
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});