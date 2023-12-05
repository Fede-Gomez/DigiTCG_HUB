import React from 'react'
import { Text, Button, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { modalContadorMemoria } from '../../styles'

const ModalContadorMemoria = ({isModalVisible, toggleModal, historial}) => {
    const style = modalContadorMemoria
    const renderItem = ({item})=>{
    return(
      <Text style={{
        ...style.texto,
        borderRadius:20, 
        alignSelf: item.includes('Turno del Jugador 2') ? 'flex-end' : 'flex-start'
    }}>{item}</Text> 
    )
  }
  const listaVacia = ()=>{
    return (
        <Text style={{
            ...style.texto,
            alignSelf: 'center'
        }}>Contador de memoria en 0</Text>
    )
  }
  return (
    <Modal isVisible={isModalVisible}>
      <FlatList
        renderItem={renderItem}
        ListEmptyComponent={listaVacia}
        data={historial == undefined ? [] : historial}
      />
      <Button title="Salir" onPress={toggleModal} />
    </Modal>
  )
}

export default ModalContadorMemoria