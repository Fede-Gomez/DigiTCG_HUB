import React, { useState } from 'react'
import { Button, ScrollView, ImageBackground } from 'react-native';
import { useCards } from '../../hooks';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { useAppSelector } from '../../hooks/useReducerHook';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';



export const CardsSellingFilterScreen = () => {
  const navigation = useNavigation();
  const filterList = useAppSelector(state => state.cards.listFilter)
  const [filters] = useState(filterList)
  const {cardListFiltered} = useCards()
  const [attribute, setAttribute] = React.useState([]);
  const [color, setColor] = React.useState([]);
  const [keyword, setKeyword] = React.useState([]);
  const [level, setLevel] = React.useState([]);
  const [playCost, setPlayCost] = React.useState([]);
  const [rarity, setRarity] = React.useState([]);
  const [traits, setTraits] = React.useState([]);
  const [type, setType] = React.useState([]);

  // prepara los arrays para el MultipleSelectList
  // lo que hace es armar objetos con clave valor que pide de requisito el componente
  const attributeItems = filters.attribute?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const colorItems = filters.color?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const keywordItems = filters.keyword?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const levelItems = filters.level?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const playCostItems = filters.playCost?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const rarityItems = filters.rarity?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const traitsItems = filters.traits?.map((value, index) => ({ key: (index + 1).toString(), value }));
  const typeItems = filters.type?.map((value, index) => ({ key: (index + 1).toString(), value }));

const groupSelection = ()=>{
  const filtChoiced = {
    attribute, 
    color, 
    keyword, 
    level, 
    playCost, 
    rarity, 
    traits, 
    type,
  }
  cardListFiltered(filtChoiced)
  navigation.navigate(TypeNavigation.game.cardsView);
}

    return <ImageBackground
      source={require('../../assets/backgrounds/filterSelect.jpg')}
      style={{flex:1}}
    > 
    <ScrollView>
      <MultipleSelectList 
        setSelected={(val) => setAttribute(val)} 
        data={attributeItems} 
        save="value"
        label="attribute"
        placeholder='Attribute'
      />
      <MultipleSelectList 
        setSelected={(val) => setColor(val)} 
        data={colorItems} 
        save="value"
        label="color"
        placeholder='Color'
      />
      <MultipleSelectList 
        setSelected={(val) => setKeyword(val)} 
        data={keywordItems} 
        save="value"
        label="keyword"
        placeholder='Keyword'
      />
      <MultipleSelectList 
        setSelected={(val) => setLevel(val)} 
        data={levelItems} 
        save="value"
        label="level"
        placeholder='Level'
      />
      <MultipleSelectList 
        setSelected={(val) => setPlayCost(val)} 
        data={playCostItems} 
        save="value"
        label="playCost"
        placeholder='Play cost'
      />
      <MultipleSelectList 
        setSelected={(val) => setRarity(val)} 
        data={rarityItems} 
        save="value"
        label="rarity"
        placeholder='Rarity'
      />
      <MultipleSelectList 
        setSelected={(val) => setTraits(val)} 
        data={traitsItems} 
        save="value"
        label="type"
        placeholder='Traits'
      />
      <MultipleSelectList 
        setSelected={(val) => setType(val)} 
        data={typeItems} 
        save="value"
        label="type"
        placeholder='Type'
      />
      <Button
        title='Confirm'
        onPress={()=>{groupSelection()}}
      />    
    </ScrollView>
  </ImageBackground>
}
