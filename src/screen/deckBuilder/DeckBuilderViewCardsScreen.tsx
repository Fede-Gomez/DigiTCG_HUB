import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardListCardsView, Folder, ModalCard } from '../../components'
import { TypeNavigation } from '../../constants/typesNavigation';

const DeckBuilderViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  const cardInfo = useAppSelector(state => state.app.modalCardView)
  
  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardView.jpg')}
      style={{ flex: 1 }}
    >
      {card.count == 0
        ? <Folder />
        : <>
          <CardListCardsView topTab={TypeNavigation.game.deckBuilder} />
        </>
      }
      {/* abre todos los modals de todas touchable de las cartas que hayan */}
      <ModalCard card={cardInfo} />
    </ImageBackground>
  )
}

export default DeckBuilderViewCardsScreen