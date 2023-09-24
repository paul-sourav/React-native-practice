import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Mapping = () => {
  const userData = [
    {id: '1', name: 'Daksh'},
    {id: '2', name: 'Daisy'},
    {id: '3', name: 'Daniel'},
    {id: '4', name: 'Dylan'},
    {id: '5', name: 'Dakota'},
    {id: '6', name: 'Drew'},
    {id: '1', name: 'Daksh'},
    {id: '2', name: 'Daisy'},
    {id: '3', name: 'Daniel'},
    {id: '4', name: 'Dylan'},
    {id: '5', name: 'Dakota'},
    {id: '6', name: 'Drew'},
  ];
  return (
    <View>
      <ScrollView style={{marginBottom: 40}}>
        {userData.map(item => (
          <Text key={item.id} style={styles.listStyle}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: '#B2BEB5',
    padding: 10,
    fontSize: 35,
    margin: 5,
  },
});

export default Mapping;
