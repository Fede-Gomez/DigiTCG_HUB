import React, { useState } from 'react'
import { Button, ScrollView, ImageBackground, View } from 'react-native';
import { useCards } from '../../hooks';
import { useAppSelector } from '../../hooks/useReducerHook';
import { useNavigation } from '@react-navigation/native';
import { TypeNavigation } from '../../constants/typesNavigation';
import DropDownPicker from 'react-native-dropdown-picker';
import { filter } from '../../styles';



const CardsWishedFilterScreen = () => {
  const navigation = useNavigation();
  const filterList = useAppSelector(state => state.cards.listFilter)
  const [filtros] = useState(filterList)
  const { cardListFiltered } = useCards()
  const style = filter
  
  const [playCosts, setPlayCost] = useState(filtros.playCost);
  const [openPlayCost, setOpenPlayCost] = useState(false);
  const [valuePlayCost, setValuePlayCost] = useState(null);

  const [levels, setLevel] = useState(filtros.level);
  const [openLevel, setOpenLevel] = useState(false);
  const [valueLevel, setValueLevel] = useState(null);

  const [types, setType] = useState(filtros.type);
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);

  const [raritys, setRarity] = useState(filtros.rarity);
  const [openRarity, setOpenRarity] = useState(false);
  const [valueRarity, setValueRarity] = useState(null);

  const [colors, setColor] = useState(filtros.color);
  const [openColor, setOpenColor] = useState(false);
  const [valueColor, setValueColor] = useState(null);

  const [keywords, setKeyword] = useState(filtros.keyword);
  const [openKeyword, setOpenKeyword] = useState(false);
  const [valueKeyword, setValueKeyword] = useState(null);

  const [attributes, setAttribute] = useState(filtros.attribute);
  const [openAttribute, setOpenAttribute] = useState(false);
  const [valueAttribute, setValueAttribute] = useState(null);

  const [traits, setTraits] = useState(filtros.traits);
  const [openTraits, setOpenTraits] = useState(false);
  const [valueTraits, setValueTraits] = useState(null);

  const groupSelection = () => {
    const filtChoiced = {
      valueAttribute,
      valueColor,
      valueTraits,
      valueKeyword,
      valueLevel,
      valuePlayCost,
      valueRarity,
      valueType
    }
    cardListFiltered(filtChoiced)
    navigation.navigate(TypeNavigation.game.cardsView);
  }

  const clearGroupSelection = ()=>{
    setValueAttribute(null),
    setValueColor(null),
    setValueKeyword(null),
    setValueLevel(null),
    setValuePlayCost(null),
    setValueRarity(null),
    setValueTraits(null),
    setValueType(null)
  }

  return <ImageBackground
    source={require('../../assets/backgrounds/filterSelect.jpg')}
    resizeMode='cover'
    style={{ flex: 1 }}
  >
    <View style={style.containerBtnClearOk}>
      <Button
        title='Confirm'
        onPress={()=>{groupSelection()}}
      />    
      <Button
        title='Clear'
        onPress={()=>{clearGroupSelection()}}
      />    
    </View>
    <ScrollView>
      <DropDownPicker
        open={openPlayCost}
        value={valuePlayCost}
        items={playCosts}
        setOpen={setOpenPlayCost}
        setValue={setValuePlayCost}
        setItems={setPlayCost}
        placeholder={'Choose playcosts'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valuePlayCost?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openAttribute}
        value={valueAttribute}
        items={attributes}
        setOpen={setOpenAttribute}
        setValue={setValueAttribute}
        setItems={setAttribute}
        placeholder={'Choose attribtes'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueAttribute?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openLevel}
        value={valueLevel}
        items={levels}
        setOpen={setOpenLevel}
        setValue={setValueLevel}
        setItems={setLevel}
        placeholder={'Choose level'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueLevel?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openType}
        value={valueType}
        items={types}
        setOpen={setOpenType}
        setValue={setValueType}
        setItems={setType}
        placeholder={'Choose types'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueType?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openRarity}
        value={valueRarity}
        items={raritys}
        setOpen={setOpenRarity}
        setValue={setValueRarity}
        setItems={setRarity}
        placeholder={'Choose raritys'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueRarity?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openColor}
        value={valueColor}
        items={colors}
        setOpen={setOpenColor}
        setValue={setValueColor}
        setItems={setColor}
        placeholder={'Choose colors'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueColor?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openKeyword}
        value={valueKeyword}
        items={keywords}
        setOpen={setOpenKeyword}
        setValue={setValueKeyword}
        setItems={setKeyword}
        placeholder={'Choose keywords'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueKeyword?.toString().replaceAll(',', ' ')}
      />
      <DropDownPicker
        open={openTraits}
        value={valueTraits}
        items={traits}
        setOpen={setOpenTraits}
        setValue={setValueTraits}
        setItems={setTraits}
        placeholder={'Choose traits'}
        listMode='SCROLLVIEW'
        dropDownContainerStyle={{
          position: 'relative',
          top: 0
        }}
        multiple
        multipleText={valueTraits?.toString().replaceAll(',', ' ')}
      />
    </ScrollView>
  </ImageBackground>
}

export default CardsWishedFilterScreen