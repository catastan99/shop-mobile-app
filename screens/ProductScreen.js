import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ProductScreen = ({route}) => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        setProduct(route.params.item)
    },[])

    console.log(product)
  return (
    <ScrollView style={styles.productScreen}>
    <View style={styles.productScreen}>
      <View style={styles.productImageContainer}>
        <Image source={product.productImage} resizeMode="contain" style={styles.productImage}/>
      </View>
      <View style={styles.productInfo}>
        
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.productDescription}>Pret: {product.price} RON</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        
      </View>
    </View>
    </ScrollView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    productScreen:{
        flex:1,
        backgroundColor:'white'
    },
    productImageContainer:{
        height:300,
        width:'100%',
        marginBottom:30
    },
    productImage:{
        width:'100%',
        height:'100%',
    },
    productInfo:{
        paddingHorizontal:20
    },
    productName:{
        fontSize: 25,
        fontWeight:'600',
        fontFamily:'dmsans',
        marginBottom:10
    },
    productDescription:{
        fontSize:15,
        textAlign:'justify',
        marginBottom:8
    }
})