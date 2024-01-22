import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { cardStyle } from '../../styles';
import { useApp } from '../../hooks';
import { placeholderCard } from '../../assets/backgrounds/index';
import { useAppSelector } from '../../hooks/useReducerHook';

const CardDigimonDeck = ({ card }) => {
    const { id, imgUrl, count } = card
    const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
    const style = cardStyle(builderWishedSelling);
    const { setModalCard, setModalCardInfo } = useApp()
    
    const toggleModal = () => {
        setModalCard(true);
        setModalCardInfo(card)
    };
    const [loading, setLoading] = useState(true)
    
    return (
        <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            onPress={toggleModal}
        >
            <Image
                source={loading ? placeholderCard :{uri:imgUrl}}
                style={{
                    width:100,
                    height:160,
                    resizeMode:'contain',
                    marginHorizontal:10
                }}
                onLoad={()=>{setLoading(false)}}
            />
            <View style={style.countTextDeck}>
                <Text style={{fontSize:25}}>{count}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardDigimonDeck