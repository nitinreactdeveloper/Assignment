import { StyleSheet, Text, View, TouchableOpacity, Dimensions, PixelRatio } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const fontFamily = 'Inter-Regular'

const Button = ({ onPress, title, width, height, backgroundColor, fontSize, borderColor, color, ...rest }) => {
    return (
        <TouchableOpacity
            style={[styles.primaryBtn, { height: height ? height : 50, width: width ? width : '90%', backgroundColor: backgroundColor ? backgroundColor : '#263FA9', ...rest }]}
            onPress={() => onPress()}>
            <Text style={[styles.primaryBtnTxt, { fontSize: fontSize ? fontSize : PixelRatio.getPixelSizeForLayoutSize(6), color: color ? color : '#ffffff' }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    primaryBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        backgroundColor: '#263FA9',
        borderRadius: 6,
        // marginVertical: 15,
        marginHorizontal: 10,
        elevation: 5
    },
    primaryBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#fff',
        textAlign: "center",
        fontFamily: fontFamily,
    },
})

