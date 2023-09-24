import React, { useState } from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const ModalCom = () => {
    const [visibleModal,setVisibleModal] = useState(false)
  return (
    <View>
      <Text style={{fontSize: 40}}>Modal</Text>
      <Modal transparent={true} visible={visibleModal} >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is Modal</Text>
            <Button title="CloseModal" onPress={()=>setVisibleModal(false)} />
          </View>
        </View>
      </Modal>
      <View>
        <Button title="ShowModal" onPress={()=>setVisibleModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
  },
  modalView: {
    backgroundColor: 'palegreen',
    shadowColor: 'black',
    borderRadius: 20,
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ModalCom;
