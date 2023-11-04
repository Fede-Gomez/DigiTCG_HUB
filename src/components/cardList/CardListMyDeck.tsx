import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components'
import { Text, FlatList, Button, View, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { useDeck } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import { listCardsMyDeck } from '../../styles';
import Share from 'react-native-share';

const style = listCardsMyDeck;
const CardListMyDeck = () => {
    const decks = useAppSelector(state => state.user.profile.decks)
    const listPicked = useAppSelector(state => state.cards.picked)
    const navigation = useNavigation()
    const {updateDeck, deleteDeck} = useDeck()
    const [isModalVisible, setModalVisible] = useState(false);
    const [deckChoice, setDeckChoice] = useState(null)
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
      if(listPicked.length !== 0){
        Alert.alert('Tenes cartas seleccionadas','Se sobreescribiran si sigues', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => {
            updateDeck(decks[deckChoice])
            navigation.navigate(TypeNavigation.game.cardSelected);
          }},
        ]);
      }else{
        updateDeck(decks[deckChoice])
        navigation.navigate(TypeNavigation.game.cardSelected);
      }
      
    }

    const removeDeck = (deckChoice)=>{
      Alert.alert('Estas seguro?','', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => {
          deleteDeck(deckChoice)
          setDeckChoice(null)
        }},
      ]);
    }

    const shareMessage = async () => {
      if(!message.includes(']'))
        message += "]"
      const shareOptions = {
        title: 'Compartir el deck',
        message,
      };
      try {
        await Share.open(shareOptions);
      } catch (error) {
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