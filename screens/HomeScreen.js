import {
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Title from "../components/UI/Title";
import Header from "../components/Header";
import CategoriesPreview from "../components/CategoriesPreview";
import Sale from "../components/Sale";
const HomeScreen = ({navigation}) => {
  const [scroll, setScroll] = useState(0);


  const navigateHandeler = (id)=>{
    navigation.navigate('Category', {id})
}

  return (
    <View style={styles.container}>
      <Header scroll={scroll} />
      <ScrollView
        style={styles.scrollContainer}
        onScroll={(e) => setScroll(e.nativeEvent.contentOffset.y)}
      >
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={require("../assets/images/banner.jpeg")}
            style={{ flex: 1 }}
          ></ImageBackground>
        </View>

        <View style={styles.mainContainer}>
          <CategoriesPreview navigateHandeler={navigateHandeler}/>
          </View>
          <Sale />
          <View style={styles.mainContainer}>
          <View style={{height:1200, backgroundColor:'white'}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  allSpace: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bannerContainer: {
    height: 250,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    elevation: -1,
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    elevation: -1,
  },
  mainContainer:{
    marginTop:250,
    paddingHorizontal:20
  }
});
