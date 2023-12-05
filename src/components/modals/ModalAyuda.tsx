import React from 'react'
import { Text, Button, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../../hooks/useReducerHook';

const ModalAyuda = ({isModalVisible, toggleModal}) => {

  const msj = useAppSelector(state => state.app.msjHelp)

  const renderItem = ({item})=>{
    
    return(
      <Text style={{color:'white', fontSize:20, paddingVertical:5}}>{item}</Text> 
    )
  }

  return (
    <Modal isVisible={isModalVisible}>
      <FlatList
        renderItem={renderItem}
        data={msj}
      />
      <Button title="Salir" onPress={toggleModal} />
    </Modal>
  )
}

export default ModalAyuda