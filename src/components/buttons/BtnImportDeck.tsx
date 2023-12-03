import React, {useState} from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../../hooks/useReducerHook';

const BtnImportDeck = () => {
const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
const [isModalVisible, setModalVisible] = useState(false);
const [value, onChangeText] = useState('');
const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  return (
    <View>
        <Button
            onPress={toggleModal}
            title= {'Importa Cartas'} 
        />
        <Modal
            isVisible={isModalVisible}
        >
            <Text style={{color:'white'}}>Formato para importar</Text>
            <Text style={{color:'white'}}>Cantidad de cartas</Text>
            <Text style={{color:'white'}}>Nombre de la carta</Text>
            <Text style={{color:'white'}}>BT/ST/EX/RB/P de la carta</Text>
            <Text style={{color:'white'}}>Ejemplo: 1 Agumon ST1-03 </Text>

            <TextInput
                editable
                multiline={true}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder='Pegue aqui el texto'
                style={{backgroundColor:'white', marginBottom:10}}
            />

        <Button
            onPress={toggleModal}
            title= {'Salir'} 
        />
        </Modal>
    </View>
  )
}

export default BtnImportDeck