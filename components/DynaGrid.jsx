import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const DynaGrid = () => {
  const users = [
    {id: '1', name: 'Daksh', email: 'Daksh@test.com'},
    {id: '2', name: 'Daisy', email: 'Daisy@test.com'},
    {id: '3', name: 'Daniel', email: 'Daniel@test.com'},
    {id: '4', name: 'Dylan', email: 'Dylan@test.com'},
    {id: '5', name: 'Dakota', email: 'Dakota@test.com'},
    {id: '6', name: 'Drew', email: 'Drew@test.com'},
    {id: '7', name: 'Suman', email: 'Suman@test.com'},
    {id: '8', name: 'Virat', email: 'Virat@test.com'},
    {id: '9', name: 'komal', email: 'komal@test.com'},
    {id: '10', name: 'janvi', email: 'janvi@test.com'},
  ];
  return (
    <View>
      <Text>Dynamic components Grid</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData items={item} />}
      />
    </View>
  );
};

const UserData = (props)=>{
    const item=props.items;
    return(
        <View style={styles.box}>
        <Text style={styles.items}>{item.name}</Text>
        <Text style={styles.items}>{item.email}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
  },
  items: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 5,
    fontSize: 22,
  },
});

export default DynaGrid;
