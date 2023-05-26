import React,{ useState } from 'react'
import { View, Image, Text, Button } from 'react-native';
import { Digimon } from '../../styles/cards/digimon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import { useCards } from '../../hooks';

const CardDigimon = ({card}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const {
        name, color, id, imgUrl, playCost, 
        attribute, cardNumber, cardType, digivolveColor, 
        digivolveCost, digivolveFrom, level, power, 
        rarity, stageLevel, type, source, effect
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
            style={style.modalContainer}
        >
            <View style={style.containerImgStats}>
                <Image
                    style={style.imageCardModal}
                    source={{uri:imgUrl}} 
                />
                <View style={style.containerStats}>
                    <Text style={style.textCard} >Name: {name}</Text>
                    <Text style={style.textCard} >Color: {color}</Text>
                    <Text style={style.textCard} >playCost: {playCost}</Text>
                    <Text style={style.textCard} >attribute: {attribute}</Text>
                    <Text style={style.textCard} >cardNumber: {cardNumber}</Text>
                    <Text style={style.textCard} >cardType: {cardType}</Text>
                    <Text style={style.textCard} >digivolveColor: {digivolveColor}</Text>
                    <Text style={style.textCard} >digivolveCost: {digivolveCost}</Text>
                    <Text style={style.textCard} >digivolveFrom: {digivolveFrom}</Text>
                    <Text style={style.textCard} >level: {level}</Text>
                    <Text style={style.textCard} >power: {power}</Text>
                    <Text style={style.textCard} >rarity: {rarity}</Text>
                    <Text style={style.textCard} >stageLevel: {stageLevel}</Text>
                    <Text style={style.textCard} >type: {type}</Text>
                </View>
            </View>
                <View style={style.containerEffectSource}>
                    <Text style={style.textCard} >Effect: {effect}</Text>
                    <Text style={style.textCard} >Source: {source}</Text>
                </View>
            <View>
                <Button title="Back" onPress={toggleModal} />
            </View>
        </Modal>
    </TouchableOpacity>
  )
}

export default CardDigimon