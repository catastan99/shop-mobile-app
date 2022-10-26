import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Title from './UI/Title'
import { globalColors } from '../style/globalColors'

const dummyData = [{
    id:1,
    title:"Reducere 10%",
    description:"Valabila la orice produs"
},
{
    id:2,
    title:"Reducere 19%",
    description:"Valabila la orice produs din categoria haine"
},
{
    id:3,
    title:"Reducere 30%",
    description:"Valabila la orice produs din categoria sport"
}]

const Sale = () => {
  return (
    <View style={styles.saleContainer}>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            dummyData.map((item)=>{
                return <View style={styles.saleItem} key={item.id}>
                    <Title margin={{borderBottomColor:'white', borderBottomWidth:2, marginBottom:5}}>{item.title}</Title>
                    <Text>{item.description}</Text>
                </View>
            })
        }
     </ScrollView>
    </View>
  )
}

export default Sale

const styles = StyleSheet.create({
    saleContainer:{
        height:140,
        paddingVertical: 20,
        backgroundColor:globalColors.inputBackground,
        // borderWidth:2
        marginTop:20,
        paddingHorizontal:20
    },
    saleItem:{
        width: 280,
        backgroundColor:globalColors.secondary,
        marginRight: 20,
        justifyContent:'center',
        paddingHorizontal: 20,
        borderRadius:10
    }
    
})