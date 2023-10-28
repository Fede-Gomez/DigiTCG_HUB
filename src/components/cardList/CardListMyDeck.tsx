import React, { useState,useEffect, useRef, useCallback } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components'
import { Text, FlatList, Button, View, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { useDeck } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import { listCardsMyDeck } from '../../styles';
import Share from 'react-native-share';

const CardListMyDeck = () => {
    const decks = useAppSelector(state => state.user.profile.decks)
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const {updateDeck, deleteDeck} = useDeck()
    const [deckChoice, setDeckChoice] = useState(null)
    const style = listCardsMyDeck;
    let message = '["Exported from app DigiTCG Hub"'
    
    decks[deckChoice]?.forEach(element => {
      for (let index = 0; index < element.count; index++) {
        message += `,"${element.cardNumber}"`        
      }
    });

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const selectDeck = (nameDeck)=>{
      setDeckChoice ( nameDeck )
      toggleModal()
    }
    
    const updateDeckAndGoCardSelect = ()=>{
      updateDeck(decks[deckChoice])
      navigation.navigate(TypeNavigation.game.cardSelected);
    }

    const removeDeck = async (deckChoice)=>{
      Alert.alert('Are you sure?','', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => {
          deleteDeck(deckChoice)
          setDeckChoice(null)
          // navigation.navigate(TypeNavigation.game.cardsView);
        }},
      ]);
    }

    const shareMessage = async () => {
      console.log('antes   ', message);
      
      if(!message.includes(']'))
        message += "]"
      console.log('despues   ',message);
      
      const shareOptions = {
        title: 'Compartir el deck',
        message,
      };
      try {
        await Share.open(shareOptions);
        console.log('Imagen compartida exitosamente');
      } catch (error) {
        console.log('Error al compartir la imagen:', error);
      }
    };

    const renderHeader = () => {
      return(
        <View>
          <View style={style.buttonsViewUpdateDelete}>
            <Button
              onPress={toggleModal}
              title= {!deckChoice ? 'Ver deck' : 'Ver otros decks'} 
            />
            {deckChoice &&
              <Button
                onPress={toggleModal}
                title='Actualizar'
                color={'orange'}
                onPress={()=>{updateDeckAndGoCardSelect()}}
              />
            }
            </View>
            <View style={style.buttonsViewUpdateDelete}>
              {deckChoice &&
                <Button 
                  title={'Compartir TTS deck'}
                  color={'green'}
                  onPress={shareMessage}
                />
              }
              {deckChoice &&
                <Button
                  onPress={toggleModal}
                  color={'red'}
                  title='Borrar deck'
                  onPress={()=>{removeDeck(deckChoice)}}
                />
              }

            </View>
          {deckChoice &&
            <Text style={style.nameDeck}>{deckChoice}</Text> 
          }
          {!deckChoice &&
              <View style={style.selectDecksContainer}>
                <Text style={style.selectDecks} >Selecciona un mazo</Text>
              </View> 
            }
        <Modal
            isVisible={isModalVisible}
        >
          {Object.keys(decks)?.map( clave =>(
            <View key={clave}>
                <Button
                  title={clave}
                  onPress={()=>selectDeck(clave) }
                />
            </View>
          ))}
            <View>
                <Button title="Back" onPress={toggleModal} />
            </View>
        </Modal>
      </View>
      ) 
      

      
  }
    const renderDeck = ({item})=>{
      const card = item
      return(
        <View style={style.container}>
          <CardDigimon card={card}/>
          <Text style={style.count}>{card.count}</Text>
        </View>
      )

    }

    
  return (
    <>
      <FlatList
        data={deckChoice ? decks[deckChoice] : []}
        ListHeaderComponent={renderHeader}
        renderItem={renderDeck}
        numColumns={3}
      />
    </>
  )
}

export default CardListMyDeck