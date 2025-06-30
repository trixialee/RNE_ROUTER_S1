import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (password !== password) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', fullname, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>

      <TextInput
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
        style={styles.input}
        keyboardType="full-name"
      />

      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-number"
      />

      <TextInput
        placeholder="E-mail Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 14,
    borderRadius: 25,
     marginTop: 35,
 

  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});