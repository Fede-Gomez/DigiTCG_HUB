import React, { useEffect, useMemo, useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
import { Text, FlatList, Button, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDeck } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';

export const DeckBuilderDecksSelectedScreen = () => {  
    const decks = useAppSelector(state => state.user.user.decks)
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const {updateDeck, deleteDeck} = useDeck()
    const [deckChoice, setDeckChoice] = useState(null)

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
      deleteDeck(deckChoice)
      setDeckChoice(null)
      navigation.navigate(TypeNavigation.game.cardsView);
    }

    const renderHeader = () => {
      return(
        <View >
          <Button
            onPress={toggleModal}
            title='View deck'
          />
          {deckChoice &&
            <Button
              onPress={toggleModal}
              title='Update deck'
              onPress={()=>{updateDeckAndGoCardSelect()}}
            />
          }
          {deckChoice &&
            <Button
              onPress={toggleModal}
              title='Delete deck'
              onPress={()=>{removeDeck(deckChoice)}}
            />
          }
          {deckChoice &&
            <Text>{deckChoice}</Text> 
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
    const renderDeck = (item)=>{
      const card = item.item
      
      return(
        <View style={{flexDirection:'column'}}>
          <CardDigimon card={card}/>
          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          </View>
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
