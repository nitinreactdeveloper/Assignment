import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthContext} from './AuthProvider';
import Appstack from './Appstack';
import {NavigationContainer} from '@react-navigation/native';
const Route = () => {
  return (
    <NavigationContainer>
      <Appstack />
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
