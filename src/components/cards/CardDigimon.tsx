import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { cardStyle } from '../../styles';
import { useApp } from '../../hooks';

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
            <Image
                style={style.imageCard}
                source={{ uri: imgUrl }}
            />
        </TouchableOpacity>
    )
}

export default React.memo(CardDigimon)