import React from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardListCardsView, Folder, ModalCard } from '../../components'
import { TypeNavigation } from '../../constants/typesNavigation';
import { backgroundCompra, backgroundDeck, backgroundVenta } from '../../assets/backgrounds';

const ViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  const cardInfo = useAppSelector(state => state.app.modalCardView)
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  let fondo;
  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: fondo = backgroundDeck
      break;
    case TypeNavigation.game.cardsBuy : fondo = backgroundCompra
      break;
    case TypeNavigation.game.cardsSell : fondo = backgroundVenta
      break;
  }
  return (
    <ImageBackground
      source={fondo}
      style={{ flex: 1 }}
    >
      {card.count == 0
        ? <Folder />
        : <>
          <CardListCardsView/>
        </>
      }
      {/* abre todos los modals de todas touchable de las cartas que hayan */}
      <ModalCard card={cardInfo} />
    </ImageBackground>
  )
}

export default ViewCardsScreen