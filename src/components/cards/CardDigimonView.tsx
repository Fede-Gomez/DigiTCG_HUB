import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native';
import { listCardsView } from '../../styles';
import { useApp } from '../../hooks';
import { placeholderCard } from '../../assets/backgrounds/index';
import { BtnAddRemoveCards } from '../buttons';
import { useNavigation } from '@react-navigation/native';

const CardDigimonView = ({ card }) => {
    const { id, imgUrl } = card
    const styleAddRemove = listCardsView
    const { setModalCard, setModalCardInfo } = useApp()
    const navigate = useNavigation()
    const toggleModal = () => {
        setModalCard(true);
        setModalCardInfo(card)
    };
    const [loading, setLoading] = useState(true)
    
    return (
        <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            onPress={()=>navigate.navigate('Card Info', card)}
            // onPress={toggleModal}
        >
            <Image
                source={loading ? placeholderCard :{uri:imgUrl}}
                style={{
                    width:'100%',
                    height:160,
                    resizeMode:'contain',
                }}
                onLoad={()=>{setLoading(false)}}
            />
            <View style={styleAddRemove.buttonsAddRemove}>
                <BtnAddRemoveCards item={card} />
            </View>
        </TouchableOpacity>
    )
}

export default CardDigimonView