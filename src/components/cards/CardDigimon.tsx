import React from 'react'
import { TouchableOpacity } from 'react-native';
import { cardStyle } from '../../styles';
import { useApp } from '../../hooks';
import FastImage from 'react-native-fast-image';

const CardDigimon = ({ card }) => {
    const { id, imgUrl } = card
    const style = cardStyle;
    const { setModalCard, setModalCardInfo } = useApp()

    const toggleModal = () => {
        setModalCard(true);
        setModalCardInfo(card)
    };
    
    return (
        <TouchableOpacity
            style={style.cardContainer}
            key={id}
            activeOpacity={0.7}
            onPress={toggleModal}
        >
            <FastImage
                style={{ width: 200, height: 200 }}
                source={{
                    uri: imgUrl,
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        </TouchableOpacity>
    )
}

export default CardDigimon