import React, { useState, useEffect } from 'react'
import { View, TextInput, Text } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { BtnsHeadersCard, ModalFilter } from '..'
import { listCardsView } from '../../styles'
import { useApp } from '../../hooks';
import { msjHelp } from '../../constants/msjHelp';
import RenderCardList from '../utils/RenderCardList';



const CardListCardsView = () => {
  const card = useAppSelector(state => state.cards.view)
  const cardFiltered = useAppSelector(state => state.cards.filtred)
  const listCards = useAppSelector(state => state.cards.fullListCards)
  const [nameCard, setNameCard] = useState('');

  const {setMsjHelp} = useApp()
  
  useEffect(() => {
    setMsjHelp(msjHelp.cartas)
  }, [])
  

  const style = listCardsView;

  
  const renderListEmpty = () => {
    return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <Text style={style.listEmpty}>
        No se encontraron cartas
      </Text>
    </View>
  }

  const renderData = () => {
    // sino me escribe nada en el buscador y pone filtros
    if (nameCard == '' && cardFiltered.length !== 0) {      
      return cardFiltered
    }
    // si me escribe algo en el buscador y me pone filtros
    if (nameCard !== '' && cardFiltered.length !== 0) {
      return cardFiltered?.filter((card) => card.name?.toLowerCase().includes(nameCard.toLowerCase()))
    }
    // si escribe algo en el nombre
    if (nameCard !== '' && cardFiltered.length == 0){      
      return listCards?.filter((card) => card.name?.toLowerCase().includes(nameCard.toLowerCase()))
    }
    // sino me escribe nada en el buscador y no pone filtro
    return card
  }

  return <>
    <RenderCardList
      data={renderData()}
      header={BtnsHeadersCard}
      empty={renderListEmpty}
      tabBar={'Cartas'}
    />
    <TextInput
      placeholder="Buscador por nombre"
      onChangeText={setNameCard}
      value={nameCard}
      style={style.searchCard}
      placeholderTextColor={'black'}
    />
    <ModalFilter />
  </>
}

export default CardListCardsView