import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButton = () => {
  const [buttonSelected, setButtonSelected] = useState(1);
  const [skillSelected,setSkillSelected] = useState("")
  const skills = [ 
    {id:"1a",name:"JAVA"},
    {id:"1b",name:"PITHON"},
    {id:"1c",name:"NODE"},
    {id:"1d",name:"JAVASCRIPT"},
    {id:'1e',name:"HTML"}
  ]

  return (
    <View>
      <Text style={{fontSize: 40}}>Text TouchableOpacity RadioButton </Text>
      {
        skills.map((item,index)=><TouchableOpacity key={index+"a"} onPress={() => setButtonSelected(item.id)}>

        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {buttonSelected === item.id ? <View style={styles.radioBg}/> : null}
          </View>
          <View style={styles.radioText}>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  radioWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"space-between",
    marginHorizontal:10,
    alignItems: 'center',
    margin: 5,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'orangered',
    borderWidth: 2,
    borderRadius: 20,
  },
  radioBg: {
    backgroundColor: 'orangered',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioText: {
    fontSize: 19,
    color: 'orange',
  },
});

export default RadioButton;
