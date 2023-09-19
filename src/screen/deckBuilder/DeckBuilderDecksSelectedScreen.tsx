import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
import { Text, FlatList, Button, View, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import { useDeck } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import { listCardsMyDeck } from '../../styles';

export const DeckBuilderDecksSelectedScreen = () => {  
    const decks = useAppSelector(state => state.user.user.decks)
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const {updateDeck, deleteDeck} = useDeck()
    const [deckChoice, setDeckChoice] = useState(null)
    const style = listCardsMyDeck;
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
        <View>
          <View style={style.buttonsViewUpdateDelete}>
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
          </View>
          {deckChoice &&
            <Text style={style.nameDeck}>{deckChoice}</Text> 
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
        <View style={style.container}>
          <CardDigimon card={card}/>
          <Text style={style.count}>{card.count}</Text>
        </View>
      )

    }
  return (
    <ImageBackground
      source={require('../../assets/backgrounds/myDecks.jpg')}
      resizeMode='cover'
      style={{flex:1}}
    >
      <FlatList
        data={deckChoice ? decks[deckChoice] : []}
        ListHeaderComponent={renderHeader}
        renderItem={renderDeck}
        numColumns={3}
      />
    </ImageBackground>
    )
  
}
