import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { category } from "../utils/data";
import Title from "./UI/Title";
import { globalColors } from "../style/globalColors";
import { Link } from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CategoriesPreview = ({ navigateHandeler }) => {
  const categoryItem = ({ item }) => {
    return (
      <View style={styles.categoryItem}>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => navigateHandeler(item.id)}
        >
          <View style={styles.categoryImageContainer}>
            <Image
              source={item.previewImage}
              style={styles.categoryImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.categoryName}>{item.categoryName}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ alignItems: "center", width: "100%" }}>
        <FlatList
          
          data={category}
          renderItem={categoryItem}
          keyExtractor={(item) => item.id}
          numColumns="3"
        />
      </View>
    </View>
  );
};

export default CategoriesPreview;

const styles = StyleSheet.create({
  pressableContainer:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItem: {
    // backgroundColor: "red",
    width: 105,
    height: 110,
    marginRight: 6,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: globalColors.inputBackground,
  },
  categoryName: {
    textAlign: "center",
    minHeight: 30,
  },
  categoryImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 2,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
});
