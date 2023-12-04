import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../../hooks/useReducerHook';
import { useCards } from '../../hooks';

const BtnImportDeck = () => {
const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
const {cardsImported} = useCards();

const [isModalVisible, setModalVisible] = useState(false);
const [value, onChangeText] = useState('');
const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
        <TouchableOpacity
            onPress={toggleModal}
        >
            <Text style={{backgroundColor:'red',
            borderRadius:8,
            padding:20,
            color:'white',
            fontSize:30,}}
        >Importar Cartas</Text>
        </TouchableOpacity>
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
                style={{backgroundColor:'white',color:'black', marginBottom:10}}
            />
            <View
                style={{flexDirection:'row', justifyContent:'space-evenly'}}
            >
                <TouchableOpacity
                    onPress={()=>cardsImported(value, builderWishedSelling)}
                    style={{backgroundColor:'green', padding:20}}
                >
                    <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Importar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={toggleModal}
                    style={{backgroundColor:'red', padding:20}}
                >
                    <Text style={{color:'white',fontSize:20, textAlign:'center'}}>Salir</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </View>
  )
}

export default BtnImportDeck