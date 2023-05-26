import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  DeckBuilderCardsSelectedScreen, 
  DeckBuilderCardsViewScreen,
  DeckBuilderDecksSelectedScreen,
  DeckBuilderFilterScreen,
  DeckBuilderSearchCardScreen 
} from '../screen/deckBuilder';
import { 
  CardWishedSearchScreen, 
  CardsWishedFilterScreen, 
  CardsWishedSelectedScreen, 
  CardsWishedViewCardsScreen 
} from '../screen/cardsWished'
import { TypeNavigation } from '../constants/typesNavigation';

const Tab = createBottomTabNavigator();

export const BottomDeckBuilderTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={DeckBuilderCardsViewScreen} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={DeckBuilderCardsSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.deckSelected} component={DeckBuilderDecksSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={DeckBuilderFilterScreen} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={DeckBuilderSearchCardScreen} />
    </Tab.Navigator>
  )
}

export const BottomCardsWishedTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={CardsWishedViewCardsScreen} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardsWishedSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={CardsWishedFilterScreen} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={CardWishedSearchScreen} />
    </Tab.Navigator>
  )
}


