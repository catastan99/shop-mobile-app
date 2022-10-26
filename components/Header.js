import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { globalColors } from "../style/globalColors";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({scroll}) => {
  return (
    <View style={scroll < 20 ? styles.headerContainer : [styles.headerContainer, styles.scroll]}>
      <SafeAreaView>
        <TextInput
          placeholder="Incepe o cautare noua"
          style={styles.textInput}
        />
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical:30,
    // backgroundColor:'red'
  },
  textInput: {
    marginHorizontal: 20,
    
    backgroundColor: globalColors.inputBackground,
    color: globalColors.primary,
    padding: 10,
    borderRadius: 20,
    zIndex:3,
    elevation:3
  },
  scroll:{
    backgroundColor:'white',
    borderBottomColor:globalColors.inputBackground,
    borderBottomWidth:1
  }
});
