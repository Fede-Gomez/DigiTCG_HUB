import React from 'react'
import { TypeNavigation } from '../../constants/typesNavigation'
import { ButtonSaveDeck } from './BtnSaveDeck'
import { BtnShareCards } from './BtnShareCards'

export const BtnsHeader = ({topTab, cards})=>{
    switch (topTab) {
      case TypeNavigation.game.deckBuilder: return(
        <ButtonSaveDeck cards={cards}/>
      )
      case TypeNavigation.game.cardsWished: return(
        <BtnShareCards message={`Busco:\n`} cards={cards} titlePrompt={'Compartir la busqueda'} />
      )
      case TypeNavigation.game.cardsSelling: return(
        <BtnShareCards message={`Vendo:\n`} cards={cards} titlePrompt={'Compartir la venta'} />
      )
    }
  }