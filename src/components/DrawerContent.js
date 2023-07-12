import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  PixelRatio,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigation/AuthProvider';
const height = Dimensions.get('window').height;
const fontFamily = 'Inter-Regular';
const DrawerContent = props => {
  const {navigation} = props;
  return (
    <>
      <View style={styles.Container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}></View>

        <View
          style={{
            position: 'absolute',
            padding: 20,
            width: 280,
            backgroundColor: '#21348D',
            height: height,
          }}>
          <TouchableOpacity style={styles.wrapper}>
            <Feather name="home" size={24} color={'#fff'} />
            <Text style={styles.text}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Feather name="users" size={24} color={'#fff'} />
            <Text style={styles.text}>Customers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Ionicons name="cube-outline" size={26} color={'#fff'} />
            <Text style={styles.text}>Vendors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Feather name="shopping-bag" size={24} color={'#fff'} />
            <Text style={styles.text}>Goods/Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Feather name="settings" size={24} color={'#fff'} />
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <Feather name="file" size={24} color={'#fff'} />
            <Text style={styles.text}>Reports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: height,
    backgroundColor: '#21348D',
  },
  username: {
    fontFamily: fontFamily,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    color: '#3B6179',
    marginHorizontal: 15,
  },
  text: {
    fontFamily: fontFamily,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginHorizontal: 15,
  },
  wrapper: {
    width: '100%',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
