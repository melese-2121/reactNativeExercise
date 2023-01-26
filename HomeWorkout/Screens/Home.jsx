import Exercise from "../components/Exercise";
import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

const Home = () => {
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../Images/b_6.jpg")}
    >
      <ScrollView style={styles.androidSafeArea}>
        <View style={styles.nav}>
          <View>
            <Text style={styles.logo}>Home Workout</Text>
          </View>
          <View style={styles.calcs}>
            <View>
              <Text style={styles.value}>0</Text>
              <Text style={styles.name}>WORKOUTS</Text>
            </View>
            <View>
              <Text style={styles.value}>0</Text>
              <Text style={styles.name}>KCAL</Text>
            </View>
            <View>
              <Text style={styles.value}>0</Text>
              <Text style={styles.name}>MINUTES</Text>
            </View>
          </View>
        </View>
        <Exercise />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
  },
  nav: {
    backgroundColor: "#556b2f",
    height: 180,
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontStyle: "italic",
    color: "#4b0082",
    fontWeight: "bold",
    marginLeft: 10,
    marginEnd: 10,
    marginTop: 30,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  calcs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 35,
  },
  value: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  name: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default Home;
