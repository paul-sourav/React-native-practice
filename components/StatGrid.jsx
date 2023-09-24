import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StatGrid = () => {
  const userData = [
    {id: '1', name: 'Daksh'},
    {id: '2', name: 'Daisy'},
    {id: '3', name: 'Daniel'},
    {id: '4', name: 'Dylan'},
    {id: '5', name: 'Dakota'},
    {id: '6', name: 'Drew'},
    {id: '7', name: 'Suman'},
    {id: '8', name: 'Virat'},
    {id: '9', name: 'komal'},
    {id: '10',name:"janvi"}
  ];
  return (
    <View>
      <Text>This is a Grid in react-native</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {userData.map(item => (
          <Text style={styles.DataStyle} key={item.id}>
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DataStyle: {
    backgroundColor: '#D8BFD8',
    width: 100,
    margin: 2,
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 150,
    padding: 10,
  },
});
export default StatGrid;
