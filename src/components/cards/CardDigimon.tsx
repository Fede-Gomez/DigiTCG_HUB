import React,{ useState } from 'react'
import { View, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { Digimon } from '../../styles';

const CardDigimon = ({card}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const {
        name, color, id, imgUrl, playCost, attribute, cardNumber, cardType, digivolveColor, 
        digivolveColor2, digivolveCost, digivolveCost2, digivolveFrom, digivolveFrom2, traits,
        level, power, securityEffect, rarity, stageLevel, source, effect, effect2, effect3, inheritedEffect
    } = card.data;
    const style = Digimon;

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    return (
    <TouchableOpacity
        style={style.cardContainer} 
        key={id}
        activeOpacity={0.7}
        onPress={toggleModal}
    >
        <Image
            style={style.imageCard}
            source={{uri:imgUrl}} 
        />
        <Modal
            isVisible={isModalVisible}
        >
            <View
                style={style.modalContainerCard}
                >
            <View style={style.containerImgStats}>
                <Image
                    style={style.imageCardModal}
                    source={{uri:imgUrl}} 
                    />
                <View style={style.containerStats}>
                    <Text style={style.textCard} >Name: {name}</Text>
                    <Text style={style.textCard} >Color: {color}</Text>
                    <Text style={style.textCard} >CardNumber: {cardNumber}</Text>
                    <Text style={style.textCard} >CardType: {cardType}</Text>
                    <Text style={style.textCard} >Rarity: {rarity}</Text>
                    {attribute && <Text style={style.textCard} >Attribute: {attribute}</Text> }
                    {level && <Text style={style.textCard} >Level: {level}</Text> }
                    {stageLevel && <Text style={style.textCard} >StageLevel: {stageLevel}</Text>}
                    {playCost !== null && playCost !== undefined && (
                        <Text style={style.textCard}>Playcost: {playCost}</Text>
                    )}
                    {digivolveColor && <Text style={style.textCard} >DigivolveColor: {digivolveColor}</Text>}
                    {digivolveColor2 && <Text style={style.textCard} >DigivolveColor: {digivolveColor2}</Text>}
                    {digivolveFrom && <Text style={style.textCard} >DigivolveFrom: {digivolveFrom}</Text>}
                    {digivolveFrom2 && <Text style={style.textCard} >DigivolveFrom: {digivolveFrom2}</Text>}
                    {digivolveCost !== null && digivolveCost !== undefined && (
                        <Text style={style.textCard}>DigivolveCost: {digivolveCost}</Text>
                    )}
                    {digivolveCost2 && <Text style={style.textCard} >DigivolveCost: {digivolveCost2}</Text>}
                    {power &&  <Text style={style.textCard} >Power: {power}</Text>}
                    {traits && <Text style={style.textCard} >Type: {traits.toString()}</Text>} 
                </View>
            </View>
                <View style={style.containerEffectSource}>
                    <View style={style.containerTextEffect}>
                        {effect && <Text style={style.textCardEffect} >Effect: {effect}</Text>}
                        {effect2 && <Text style={style.textCardEffect} >{effect2}</Text>}
                        {effect3 && <Text style={style.textCardEffect} >{effect3}</Text>}
                    </View>
                    {inheritedEffect && <Text style={style.textCard} >Inherited Effect: {inheritedEffect}</Text>}
                    {securityEffect && <Text style={style.textCard} >Security Effect: {securityEffect}</Text>}
                    <Text style={style.textCard} >Source: {source}</Text>
                </View>

            </View>
            <View>
                <Button title="Back" onPress={toggleModal} />
            </View>
        </Modal>
    </TouchableOpacity>
  )
}

export default React.memo(CardDigimon)