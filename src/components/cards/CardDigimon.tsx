import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native';
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
        <ImageBackground
            source={require('../../assets/backgrounds/compra.jpg')}
            style={{ width: 190, height: 200 }}
            resizeMode='center'
        >
            <TouchableOpacity
                style={style.cardContainer}
                key={id}
                activeOpacity={0.7}
                onPress={toggleModal}
            >
                <FastImage
                    style={{ width: 190, height: 200 }}
                    source={{
                        uri: imgUrl,
                        priority: FastImage.priority.high,
                    }}

                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default CardDigimon