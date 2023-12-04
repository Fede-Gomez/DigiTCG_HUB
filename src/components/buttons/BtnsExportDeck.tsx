import React, {useState} from 'react'
import { View, Button, TouchableOpacity, Text } from 'react-native';
import Share from 'react-native-share';
import { useAppSelector } from '../../hooks/useReducerHook';
import { listCardsMyDeck } from '../../styles';
import Modal from 'react-native-modal';
import { BtnShareCards } from './BtnShareCards';

let messageTts = '["Exported from app DigiTCG Hub"'
let messageTxt = ''
const style = listCardsMyDeck;
const BtnsExportDeck = ({deckChoice}) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const decks = useAppSelector(state => state.user.profile.decks)
    
    decks[deckChoice]?.forEach(element => {
        for (let index = 0; index < element.count; index++) {
          messageTts += `,"${element.cardNumber}"`;
        }
        messageTxt += `${element.count} ${element.name} ${element.cardNumber} \n`        
      });

      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    const shareMessageTts = async () => {
        if(!messageTts.includes(']')) messageTts += "]"
        const shareOptions = {
          title: 'Compartir el deck',
          message: messageTts,
        };
        try {
          await Share.open(shareOptions);
        }
        catch (error) {
        }
        finally{
            toggleModal()
        }
      };
      
      const shareMessageTxt = async () => {
        const shareOptions = {
          title: 'Compartir el deck',
          message: messageTxt,
        };
        try {
          await Share.open(shareOptions);
          toggleModal()
        } catch (error) {
        }
        finally{
            toggleModal()
        }
      };

  return (
    <View style={style.buttonsViewUpdateDelete}>
        <Button
            onPress={toggleModal}
            title= {'Exportar Deck'} 
        />
        <Modal
            isVisible={isModalVisible}
        >
          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              onPress={shareMessageTts}
              style={{backgroundColor:'green',margin:10}}
            >
              <Text style={{padding:10, fontSize:20, color:'white', fontWeight:'bold'}}>Compartir TTS deck</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={shareMessageTxt}
              style={{backgroundColor:'green',margin:10}}
            >
              <Text style={{padding:10, fontSize:20, color:'white', fontWeight:'bold'}}>Compartir Texto deck</Text>
            </TouchableOpacity>
            <View style={{padding:10, paddingBottom:20}}>
              <BtnShareCards message={``} cards={decks[deckChoice]} tipoOperacion='' titlePrompt={'Compartir Imagen deck'} />
            </View>
          </View>
          <Button
            title='Salir'
            onPress={toggleModal}
          />
        </Modal>
    </View>
  )
}

export default BtnsExportDeck