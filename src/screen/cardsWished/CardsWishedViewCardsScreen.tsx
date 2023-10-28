import React from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { CardDigimon, CardListCardsView, Folder } from '../../components';
import { useCards } from '../../hooks';
import { listCardsView } from '../../styles';
import { TypeNavigation } from '../../constants/typesNavigation';

const CardsWishedViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  
  return (
      <ImageBackground
        source={require('../../assets/backgrounds/cardView.jpg')}
        style={{flex:1}}
      >
        {card.count == 0
        ? <Folder />
        : <CardListCardsView topTab={TypeNavigation.game.cardsWished} />
      }
      </ImageBackground>
    )
}

export default CardsWishedViewCardsScreen