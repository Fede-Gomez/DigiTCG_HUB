import React from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { Folder, CardListCardsView } from '../../components';
import { TypeNavigation } from '../../constants/typesNavigation';

export const CardsSellingViewCardsScreen = () => {
  const cards = useAppSelector(state => state.cards.view)

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardView.jpg')}
      style={{flex:1}}
    >
     {cards.count == 0
        ? <Folder />
        : <CardListCardsView topTab={TypeNavigation.game.cardsSelling} />
      }
    </ImageBackground>
    )
}
