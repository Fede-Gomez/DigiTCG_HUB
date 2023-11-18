import React, { useState } from 'react'
import { Button, ScrollView, View } from 'react-native';
import Modal from "react-native-modal";
import { useCards, useApp } from '../../hooks';
import { useAppSelector } from '../../hooks/useReducerHook';
import { filter } from '../../styles';
import DropDownPicker from 'react-native-dropdown-picker';

const ModalFilter = () => {
    const filterList = useAppSelector(state => state.cards.listFilter)
    const isModalVisible = useAppSelector(state => state.app.modalFilterVisible)
    
    const [filtros] = useState(filterList)
    const { setModalFilter } = useApp()
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

    const [source, setSource] = useState(filtros.source);
    const [openSource, setOpenSource] = useState(false);
    const [valueSource, setValueSource] = useState(null);

    const groupSelection = () => {
        const filtChoiced = {
            valueAttribute,
            valueColor,
            valueTraits,
            valueKeyword,
            valueLevel,
            valuePlayCost,
            valueRarity,
            valueType,
            valueSource,
        };
        cardListFiltered(filtChoiced);
        closeModal();
    }

    const clearGroupSelection = () => {
        setValueAttribute(null),
        setValueColor(null),
        setValueKeyword(null),
        setValueLevel(null),
        setValuePlayCost(null),
        setValueRarity(null),
        setValueTraits(null),
        setValueType(null),
        setValueSource(null)
    }
    
    const closeModal = () => {
        setModalFilter(false)
    }

    const header = ()=>{
        return(
            <View style={style.containerBtnClearOk}>
            <Button
                title='Confirmar'
                onPress={() => { groupSelection() }}
            />
            <Button
                title='Limpiar'
                onPress={() => { clearGroupSelection() }}
            />
            <Button
                title='Volver'
                onPress={() => { closeModal() }}
            />
        </View>
        )
    }

    return <Modal
        isVisible={isModalVisible}
    >
        {header()}   
        <ScrollView>
            <DropDownPicker
                open={openPlayCost}
                value={valuePlayCost}
                items={playCosts}
                setOpen={setOpenPlayCost}
                setValue={setValuePlayCost}
                setItems={setPlayCost}
                placeholder={'Elegir Playcosts'}
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
                placeholder={'Elegir Attributes'}
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
                placeholder={'Elegir Level'}
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
                placeholder={'Elegir Types'}
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
                placeholder={'Elegir Raritys'}
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
                placeholder={'Elegir Colors'}
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
                placeholder={'Elegir Keywords'}
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
                placeholder={'Elegir Traits'}
                listMode='SCROLLVIEW'
                dropDownContainerStyle={{
                    position: 'relative',
                    top: 0
                }}
                multiple
                multipleText={valueTraits?.toString().replaceAll(',', ' ')}
            />
            <DropDownPicker
                open={openSource}
                value={valueSource}
                items={source}
                setOpen={setOpenSource}
                setValue={setValueSource}
                setItems={setSource}
                placeholder={'Bt/St/Ex/P/Rb'}
                listMode='SCROLLVIEW'
                dropDownContainerStyle={{
                    position: 'relative',
                    top: 0
                }}
                multiple
                multipleText={valueSource?.toString().replaceAll(',', ' ')}
            />
        </ScrollView>
    </Modal>
}

export default ModalFilter