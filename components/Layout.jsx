import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Layout = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.innerBox1}>
          <Text>ChildBox1</Text>
        </View>
        <View style={styles.innerBox2}>
          <Text>ChildBox2</Text>
        </View>
        <View style={styles.innerBox3}>
          <Text>ChildBox3</Text>
        </View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, height: 600, backgroundColor: '#333'},
  box1: {flex: 1, backgroundColor: 'purple', flexDirection: 'row'},
  box2: {flex: 1, backgroundColor: 'navy'},
  box3: {flex: 1, backgroundColor: 'indianred'},
  innerBox1: {flex: 1, backgroundColor: '#ff0033', margin: 2},
  innerBox2: {flex: 1, backgroundColor: '#ff0066', margin: 2},
  innerBox3: {flex: 1, backgroundColor: '#ffcccc', margin: 2},
});

export default Layout;
