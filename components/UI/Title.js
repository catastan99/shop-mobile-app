import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalColors } from '../../style/globalColors'

const Title = ({children, margin, textStyle}) => {
  return (
    <View style={margin}>
      <Text style={[styles.title, textStyle]}>{children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        lineHeight:30,
        fontWeight:'400',
        fontFamily:'dmsans',
        textTransform:'uppercase',
        color:globalColors.black
    }
})