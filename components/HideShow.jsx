import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';

const HideShow = () => {
  const [show,setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 50}}>HIDE SHOW COMPONENT</Text>
      <Button title={show ? 'Hide':"Show"} onPress={()=>setShow(!show)} />
      {show ? <MyComponent/> :null}
    </View>
  );
};

const MyComponent = () => {
    //unmounting component call
    const timer = setInterval(()=>{console.warn("timer")},2000)
    useEffect(()=>{
        return() =>{clearInterval(timer)}
    })


  return (
    <View style={{flex: 1,flexDirection:'row'}}>
      <View style={{flex: 1, backgroundColor: '#ff00cc', padding: 20}}>
        <Text style={{fontSize:18}} >HIDE</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#ffcccc', padding: 20}}>
        <Text style={{fontSize:18}} >SHOW</Text>
      </View>
    </View>
  );
};

export default HideShow;
