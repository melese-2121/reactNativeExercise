import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import ImagesData from "../Data/ImagesData";
import { useNavigation } from "@react-navigation/native";

const Exercise = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      {ImagesData.map((data) => (
        <Pressable
          key={data.id}
          style={styles.view}
          onPress={() =>
            navigation.navigate("Workout", {
              image: data.image,
              excercises: data.excersises,
            })
          }
        >
          <Image source={{ uri: data.image }} style={styles.image} />
          <Text style={styles.text}>{data.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginBottom: 40,
  },
  image: {
    width: "94%",
    height: 150,
    marginLeft: 10,
    borderRadius: 5,
  },
  text: {
    position: "absolute",
    paddingTop: 120,
    paddingLeft: 15,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});

export default Exercise;
