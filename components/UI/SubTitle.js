import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalColors } from '../../style/globalColors'

const SubTitle = ({children, margin}) => {
  return (
    <View style={margin}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
    subTitle:{
        fontSize:16,
        lineHeight:24,
        fontWeight:'400',
        fontFamily:'TenorSans',
        letterSpacing:2,
        textTransform:'uppercase',
        color:globalColors.black
    }
})