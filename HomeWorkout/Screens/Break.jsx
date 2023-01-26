import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Break = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const navigation = useNavigation();
  let timer = 0;

  //Timer
  const timeControl = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    timeControl();
    return () => clearTimeout(timer);
  });

  return (
    <ScrollView style={styles.androidSafeArea}>
      <Image style={styles.image} source={require("../Images/break.png")} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>TAKE A BREAK!</Text>
        <Text style={styles.time}>{timeLeft}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
    height: 200,
  },
  time: {
    fontSize: 50,
    marginTop: 120,
    marginBottom: 20,
    fontWeight: "bold",
    color: "red",
  },
  text: {
    fontSize: 35,
    marginTop: 30,
    fontWeight: "bold",
    color: "black",
  },
});

export default Break;
