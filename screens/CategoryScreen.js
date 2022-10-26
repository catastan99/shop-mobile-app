import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { category } from "../utils/data";
import { FlatList } from "react-native-gesture-handler";
import { globalColors } from "../style/globalColors";

const CategoryScreen = ({ route, navigation }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const id = route.params.id;
    const data = category.filter((item) => item.id === id);

    setCategoryData(data[0]);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: categoryData.categoryName,
    });
    setProducts(categoryData.products);
  }, [categoryData]);

  const pressHandler = (item) =>{
    navigation.navigate('Product',{item})
  }

  const productItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Pressable style={{flex:1}} onPress={()=>pressHandler(item)}>
        <View style={styles.productImageContainer}>
          <Image
            source={item.productImage}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>{item.price} RON</Text>
        </Pressable>
      </View>
    );
  };


  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      
        <FlatList
          ListHeaderComponent={
            <View style={{ height: 200, width: "100%", marginBottom: 30 }}>
              <Image
                source={categoryData.heroImage}
                style={{ height: 200, width: "100%" }}
                resizeMode="cover"
              />
            </View>
          }
          ListHeaderComponentStyle={{paddingHorizontal:0}}
          data={products}
          renderItem={productItem}
          keyExtractor={(product) => product.productId}
          numColumns="2"
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:20}}
          
        />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    
  },
  productContainer: {
    flex: 1,
    marginRight: 10,
    marginBottom: 15,
    padding: 8,
    minHeight: 250,
    borderWidth: 1,
    borderColor: globalColors.primary,
    borderRadius: 10,
    overflow: "hidden",
  },
  productImageContainer: {
    width: "100%",
    height: "70%",
    marginBottom: 6,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "dmsans",
  },
  productPrice: {
    fontSize: 11,
    fontFamily: "dmsans",
  },
});
