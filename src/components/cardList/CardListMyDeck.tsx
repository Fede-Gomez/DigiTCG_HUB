import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { BtnChangeNameDeck, BtnImportDeck, BtnsExportDeck, CardDigimon } from '../../components'
import { Text, FlatList, Button, View, Alert, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useApp, useDeck } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import { listCardsMyDeck } from '../../styles';
import { msjHelp } from '../../constants/msjHelp';

const style = listCardsMyDeck;
const CardListMyDeck = () => {
    const decks = useAppSelector(state => state.user.profile.decks)
    const listPicked = useAppSelector(state => state.cards.picked)
    const navigation = useNavigation()
    const { updateDeck, deleteDeck } = useDeck()
    const {setMsjHelp} = useApp()
    const [isModalVisible, setModalVisible] = useState(false);
    const [deckChoice, setDeckChoice] = useState(null)

    useEffect(() => {
      setMsjHelp(msjHelp.deck)
    }, [])


    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const selectDeck = (nameDeck)=>{
      setDeckChoice ( nameDeck )
      toggleModal()
    }
    
    const updateDeckAndGoCardSelect = ()=>{
      if(listPicked.length !== 0){
        Alert.alert('Tenes cartas seleccionadas','Se eliminaran si sigues', [
          {
            text: 'Cancel',
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
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => {
          deleteDeck(deckChoice)
          setDeckChoice(null)
        }},
      ]);
    }


    const renderHeader = () => {
      return(
        <View>
          <View style={style.buttonsViewUpdateDelete}>
            {deckChoice && <>
                <Button
                  onPress={toggleModal}
                  title= {'Ver otros decks'} 
                />
                <Button
                  onPress={toggleModal}
                  title='Actualizar'
                  color={'orange'}
                  onPress={()=>{updateDeckAndGoCardSelect()}}
                />
                  <Button
                    onPress={toggleModal}
                    color={'red'}
                    title='Borrar deck'
                    onPress={()=>{removeDeck(deckChoice)}}
                  />
              </>
            }
            </View>
            {deckChoice && <BtnsExportDeck deckChoice={deckChoice} />}
          {deckChoice &&
          <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Text style={style.nameDeck}>{deckChoice}</Text> 
            <BtnChangeNameDeck nameDeck={deckChoice} cards={decks[deckChoice]} setDeckChoice={setDeckChoice} />
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

    const renderNoDeckChoice = ()=>{
    return( 
      <TouchableOpacity
        onPress={toggleModal}
      >
        <Text style={style.selectDecks} >Selecciona un mazo</Text>
      </TouchableOpacity>
    )
    }

    const renderData = ()=>{
      if(deckChoice)
        return decks[deckChoice]
      return []
    }
  return (
    <>
      <FlatList
        data={renderData()}
        ListEmptyComponent={renderNoDeckChoice}
        ListHeaderComponent={renderHeader}
        renderItem={renderDeck}
        numColumns={2}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      />
    </>
  )
}

export default CardListMyDeck