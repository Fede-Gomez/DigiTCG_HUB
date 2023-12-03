import React, {useState} from 'react'
import { View, Button } from 'react-native';
import Share from 'react-native-share';
import { useAppSelector } from '../../hooks/useReducerHook';
import { listCardsMyDeck } from '../../styles';
import Modal from 'react-native-modal';

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
            title= {'Importar Deck'} 
        />
        <Modal
            isVisible={isModalVisible}
        >
            <Button 
                title={'Compartir TTS deck'}
                color={'green'}
                onPress={shareMessageTts}
            />
            <Button 
                title={'Compartir Texto deck'}
                color={'green'}
                onPress={shareMessageTxt}
            />
        </Modal>
    </View>
  )
}

export default BtnsExportDeck