import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <Text style={[styles.title, { color: '#ff33d3ff' }]}>Welcome to My App!</Text>
=======
      <Text style={[styles.title, { color: 'rgba(51, 112, 255, 1)' }]}>Welcome to My App!</Text>
>>>>>>> Stashed changes


      <Link href="/login" style={styles.link}>
        <Text style={styles.linkText}>Login</Text>
      </Link>

      <Text style={styles.separatorText}>or</Text>
      
      <Link href="/signup" style={styles.link}>
        <Text style={styles.linkText}>Sign Up</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
<<<<<<< Updated upstream
    backgroundColor: "black",
=======
    backgroundColor: "dirtywhite",
>>>>>>> Stashed changes
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
<<<<<<< Updated upstream
    backgroundColor: "#d1439fff",
=======
    backgroundColor: "#126fa4ff",
>>>>>>> Stashed changes
    borderRadius: 8,
    minWidth: 150,
    alignItems: "center",
    textAlign: "center"
  },
  linkText: {
<<<<<<< Updated upstream
    color: "white",
=======
    color: "#fff",
>>>>>>> Stashed changes
    fontSize: 16,
    fontWeight: "600",
  },
  separatorText: {
    marginVertical: 20, 
<<<<<<< Updated upstream
    color: 'white',
=======
    color: 'black',
>>>>>>> Stashed changes
  },
});