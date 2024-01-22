import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
import { useAppSelector } from '../../hooks/useReducerHook'
import { TypeNavigation } from '../../constants/typesNavigation'
import { useApp } from '../../hooks';
import { modalDeckBuySell } from '../../styles';

const ModalDeckBuySell = ({isModalVisible, toogleModalDeckBuySell}) => {

    const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
    const opciones = [TypeNavigation.game.deckBuilder, TypeNavigation.game.cardsBuy, TypeNavigation.game.cardsSell]
    const { setBuildWishSell } = useApp()
    const style = modalDeckBuySell(builderWishedSelling)
    return (
        <Modal isVisible={isModalVisible}>
            <TouchableOpacity style={style.selected} onPress={toogleModalDeckBuySell}>
                <Text style={style.txtSelected}>{builderWishedSelling}</Text>
            </TouchableOpacity>

            <View style={style.optionsContainer}>
                {opciones.map((element, index)=>{
                    return element != builderWishedSelling && 
                        <TouchableOpacity
                            onPress={()=>{
                                setBuildWishSell(element)
                                toogleModalDeckBuySell()
                            }}
                            key={index}
                            style={modalDeckBuySell(element).otherOptions}
                        >
                            <Text style={style.otherOptionsText}>{element}</Text>
                        </TouchableOpacity> 
                })}
            </View>

            <TouchableOpacity
                style={{bottom:0, position:'absolute', backgroundColor:'blue', paddingHorizontal:20, paddingVertical:10, alignSelf:'center'}}
                onPress={toogleModalDeckBuySell}
            >
                <Text style={{color:'white', textAlign:'center'}}>Salir</Text>
            </TouchableOpacity>
        </Modal>
      )
}

export default ModalDeckBuySell