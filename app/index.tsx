import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>
        
    
      <Text style ={styles.text}>Say hello to your new app</Text>
      <Link href="/login" style ={styles.button}>Log in</Link>
       <Link href="/signup"style ={styles.button1}>Sign up</Link>
    </View>
  );
}

const styles= StyleSheet.create({
container : {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
text: {
  fontSize: 30,
  fontWeight: 'bold',
},

button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    borderRadius: 25,
    padding: 100 ,
    marginTop: 32,
},
button1: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    borderRadius: 25,
    padding: 100 ,
    marginTop: 12,
}

})
