import {
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LiveExercise = () => {
  const navigation = useNavigation();
  const paramData = useRoute();
  const [index, setIndex] = useState(0);
  const allExcercises = paramData.params.excercises;
  const length = allExcercises.length;
  const currentExcercise = allExcercises[index];

  // Get Break Implementation
  const getBreak = () => {
    navigation.navigate("Break");
  };

  // Define Previous Excercise
  const prevExcercise = () => {
    setIndex(index - 1);
  };

  // Define Next Excericse
  const nextExcercise = () => {
    setIndex(index + 1);
  };

  return (
    <ScrollView style={styles.androidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.name}>{currentExcercise.name}</Text>
        <Image style={styles.image} source={{ uri: currentExcercise.image }} />
        <Text style={styles.times}>
          X
          <Text style={{ color: "blue", fontSize: 40 }}>
            {currentExcercise.sets}
          </Text>
        </Text>
        <Pressable onPress={getBreak}>
          <Text style={styles.done}>DONE</Text>
        </Pressable>

        <View style={styles.go}>
          {index > 0 ? (
            <Pressable onPress={prevExcercise}>
              <Text style={styles.move}>PREV</Text>
            </Pressable>
          ) : (
            ""
          )}
          {index < length - 1 ? (
            <Pressable>
              <Text style={styles.move}>NEXT</Text>
            </Pressable>
          ) : (
            ""
          )}
        </View>
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
    height: 300,
  },
  container: {
    alignItems: "center",
  },
  name: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
  times: {
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  done: {
    fontSize: 30,
    backgroundColor: "blue",
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 60,
    fontStyle: "italic",
  },
  move: {
    fontSize: 30,
    backgroundColor: "green",
    marginLeft: 20,
    padding: 20,
    borderRadius: 20,
    fontWeight: "bold",
  },
  go: {
    flexDirection: "row",
    marginBottom: 30,
  },
});

export default LiveExercise;
