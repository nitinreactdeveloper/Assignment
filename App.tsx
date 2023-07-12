import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Provider from './src/Navigation/Index';
const App = () => {
  return (
    <View style={styles.container}>
      <Provider />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
