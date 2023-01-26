import {
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const excercises = route.params.excercises;

  return (
    <>
      <ScrollView style={styles.androidSafeArea}>
        <View>
          <Image style={styles.image} source={{ uri: route.params.image }} />
          <AntDesign
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 10,
              left: 15,
              fontWeight: "bold",
            }}
            name="arrowleft"
            size={35}
            color="green"
          />
        </View>
        <View>
          {excercises.map((excercise) => (
            <View key={excercise.id} style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: 140,
                  height: 100,
                  marginTop: 10,
                  marginLeft: 10,
                  borderRadius: 5,
                }}
                source={{ uri: excercise.image }}
              />
              <View
                style={{ marginLeft: 10, alignItems: "center", marginTop: 40 }}
              >
                <Text
                  style={{ color: "#9400d3", fontSize: 16, fontWeight: "bold" }}
                >
                  {excercise.name}
                </Text>
                <Text
                  style={{
                    color: "green",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {excercise.sets}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          navigation.navigate("LiveExercise", {
            excercises: route.params.excercises,
          });
        }}
      >
        <Text style={styles.text}>START EXERCISE</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginBottom: 5,
    backgroundColor: "#000008",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 5,
  },
  line: {
    borderBottomWidth: 5,
    marginTop: 10,
    borderBottomColor: "green",
  },
  pressable: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    backgroundColor: "#228b33",
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default WorkoutScreen;
