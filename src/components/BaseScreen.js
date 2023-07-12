import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const fontFamily = 'Inter-Regular';
const BaseScreen = ({
  navigation,
  header,
  onPress,
  title,
  leftButton,
  rightButton,
  renderChild,
  paddingHorizontal,
  paddingTop,
}) => {
  return (
    <>
      <View style={styles.Container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={false}></StatusBar>
        {header === false ? null : (
          <View style={styles.header}>
            {leftButton === false ? null : leftButton === 'menu' ? (
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => onPress()}>
                <Image source={require('../images/drawer.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => onPress()}>
                <Text style={styles.headerTxt}>{title}</Text>
              </TouchableOpacity>
            )}
            <View style={styles.rightButton}>{rightButton}</View>
          </View>
        )}
        <ScrollView
          style={[
            styles.content,
            {
              paddingHorizontal: 10,
            },
          ]}>
          {renderChild}
        </ScrollView>
      </View>
    </>
  );
};
export default BaseScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#21348D',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    top: 10,
    borderBottomWidth: 1,
    borderColor: '#ffffff20',
  },
  menuButton: {
    marginLeft: 10,
    position: 'absolute',
    left: 0,
    height: 38,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTxt: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 5,
    fontFamily: fontFamily,
  },
  rightButton: {
    marginRight: 15,
    color: '#f33',
    position: 'absolute',
    right: 0,
  },
  content: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    height: '100%',
    width: '100%',
  },
  separator: {
    borderWidth: 3,
    top: -13,
    borderColor: '#3B6179',
    backgroundColor: '#3B6179',
    width: 23,
  },
});
