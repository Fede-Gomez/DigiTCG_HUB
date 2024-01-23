import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
import { useAppSelector } from '../../hooks/useReducerHook'
import { TypeNavigation } from '../../constants/typesNavigation'
import { useApp } from '../../hooks';
import { modalDeckBuySell } from '../../styles';
import * as Animatable from 'react-native-animatable';

const ModalDeckBuySell = ({isModalVisible, toogleModalDeckBuySell}) => {

    const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
    const opciones = [TypeNavigation.game.deckBuilder, TypeNavigation.game.cardsBuy, TypeNavigation.game.cardsSell]
    const { setBuildWishSell } = useApp()
    const style = modalDeckBuySell(builderWishedSelling)
    return (
        <Modal isVisible={isModalVisible}>
            <Animatable.Text key={'AnimatedText'} animation="fadeOutUp" iterationCount={'infinite'} direction="alternate" duration={2500} style={{color:'white', fontSize:20, fontWeight:'bold', position:'absolute', top:100}}>Selecciona una burbuja armar deck, comprar cartas o vender cartas</Animatable.Text>
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