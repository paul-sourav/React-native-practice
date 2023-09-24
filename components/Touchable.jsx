import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Touchable = () => {
  return (
    <View>
      <Text style={{fontSize: 40}}>Text TouchableHighlight Button</Text>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
        <View>
          <Text style={styles.primary}>Primary</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View>
          <Text style={styles.secondary}>Secondary</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#483D8B',
    padding: 10,
    fontSize: 19,
    margin: 10,
    borderRadius: 10,
    color: 'ghostwhite',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secondary: {
    backgroundColor: 'limegreen',
    padding: 10,
    fontSize: 19,
    margin: 10,
    borderRadius: 10,
    color: 'ghostwhite',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Touchable;
