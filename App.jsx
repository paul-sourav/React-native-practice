import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Mapping from './components/Mapping';
import StatGrid from './components/StatGrid';
import DynaGrid from './components/DynaGrid';
import HideShow from './components/HideShow';
import Layout from './components/Layout';
import Touchable from './components/Touchable';
import RadioButton from './components/RadioButton';

function App() {
  return (
    <ScrollView>
      <View>
        <Text style={style.textBox}>Hello</Text>
      </View>
      {/* <Mapping/> */}
      {/* <StatGrid/>  */}
      <DynaGrid />
      {/* <HideShow/> */}
      <Layout />
      <Touchable/>
      <RadioButton/>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  textBox: {
    color: '#fff',
    fontSize: 35,
    backgroundColor: '#89CFF0',
  },
});

export default App;
