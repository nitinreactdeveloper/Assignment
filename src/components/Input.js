import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const Input = ({height, width, error, ...rest}) => {
  return (
    <TextInput
      style={[
        styles.Input,
        {
          width: width ? width : '95%',
          height: height ? height : 36,
          borderColor: '#00000040',
        },
      ]}
      placeholderTextColor="#a5a5a5"
      {...rest}></TextInput>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  Input: {
    width: '90%',
    marginVertical: 10,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    borderColor: '#ffffff90',
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 10,
    fontFamily: 'Inter-Regular',
    // marginVertical: 12,
    // justifyContent: "flex-start",
    // alignItems: 'flex-start',
    // backgroundColor: '#B1D0E0',
    // borderRadius: 15,
    // color: '#104669', paddingLeft: 10,
    // textAlignVertical: 'center',
    // alignSelf: 'center',
    // paddingHorizontal: 10,
    // fontWeight: '600',
    // borderColor: '#3B6179',
    // borderWidth: 1,
    // fontSize: 15,
    // fontFamily: 'Inter-Regular'
  },
});
