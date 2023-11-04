import React, {useEffect, useRef, useState} from 'react'
import { View, Image, Text, Button, Easing } from 'react-native';
import { useApp } from '../../hooks';
import { useAppSelector } from '../../hooks/useReducerHook';
import Modal from "react-native-modal";
import { cardStyle } from '../../styles';
import { Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ModalCard = ({card}) => {
    const isModalVisible = useAppSelector(state => state.app.modalCardVisible)
    const isFliped = useAppSelector(state => state.app.flipedCard)
    const { setModalCard, setFlipCard } = useApp()

    const rotateValue = useRef(new Animated.Value(0)).current;
    const [move, setMove] = useState(true)
    const [btnHabilitado, setBtnHabilitado] = useState(false)

    const {
        name, 
        color, 
        imgUrl, 
        playCost, 
        attribute, 
        cardNumber, 
        cardType, 
        digivolveColor,
        digivolveColor2, 
        digivolveCost, 
        digivolveCost2, 
        digivolveFrom, 
        digivolveFrom2, 
        traits,        
        level, 
        power, 
        securityEffect, 
        rarity, 
        stageLevel, 
        source, 
        effect, 
        effect2, 
        effect3, 
        effect4, 
        effect5, 
        inheritedEffect, 
        inheritedEffect2, 
        inheritedEffect3,
        specialEvolve, 
        dnaDigivolve, 
        digiXcross, 
        treated,
    } = card;

    const style = cardStyle;

    const startFlipAnimation = () => {
        rotateValue.setValue(0);
        Animated.timing(rotateValue, {
          toValue: 0.5, // Detener la animación a la mitad
          duration: 750, // La mitad del tiempo total
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => {
          setFlipCard(!isFliped); // Cambiar la imagen a la mitad de la animación
          // Continuar con la segunda mitad de la animación
          Animated.timing(rotateValue, {
            toValue: 0,
            duration: 750,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        });
      };
  
    useEffect(() => {
        startFlipAnimation ();
    }, [move]);
  
    const imageRotate  = rotateValue.interpolate({
      inputRange: [0, 1] ,
      outputRange: ['0deg', '180deg'] , // Voltea la imagen en 180 grados
    });  

    const flipCard = ()=>{
        setMove(!move)
        setBtnHabilitado(true)
        setTimeout(() => {
            setBtnHabilitado(false)
        }, 1500);
    }

    
    return <Modal
        isVisible={isModalVisible}
        onSwipeComplete={()=>{setModalCard(false), setFlipCard(false)}}
        swipeDirection={!btnHabilitado ? ['up','down'] : []}
    >
        <Animatable.Text animation="fadeOutUp" iterationCount={'infinite'} direction="alternate" duration={2500} style={{color:'white', fontSize:20, fontWeight:'bold', top:50}}>Desliza arriba o abajo para salir</Animatable.Text>
      <Animated.View
        style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotateY: imageRotate }]}}
      >
        <Image
          source={{ uri: isFliped ? 'https://wikimon.net/images/4/4b/Hyper_colosseum_card_backstage_design.jpg' : imgUrl }}
          style={isFliped ? style.imgFlipped : style.imgNotFlipped }
        />
        {isFliped &&
            <View style={style.modalContainerCard} >
            <View style={style.containerImgStats} >
                    <Text style={style.firstText} >Name: {name}</Text>
                <View style={style.containerStats}>
                    {power && <Text style={style.textCard} >Power: {power}</Text>}
                    {level && <Text style={style.textCard} >Level: {level}</Text>}
                    {attribute && <Text style={style.textCard} >Attribute: {attribute}</Text>}
                </View>
                <View style={style.containerStats}>
                    <Text style={style.textCard} >Card type: {cardType}</Text>
                    {stageLevel && <Text style={style.textCard} >Stage level: {stageLevel}</Text>}
                    <Text style={style.textCard} >Card number: {cardNumber}</Text>                
                </View>
                <View style={style.containerStats}>
                    {playCost !== null && playCost !== undefined && (
                        <Text style={style.textCard}>Playcost: {playCost}</Text>
                    )}
                    <Text style={style.textCard} >Rarity: {rarity}</Text>
                </View>
                <View style={style.containerStats}>
                    <Text style={style.textCard} >Color: {color}</Text>
                </View>
                    <>
                    {traits && <Text style={style.textCard} >Traits</Text>}
                    <View style={style.containerMultiStats}>
                        {traits?.map(element => {return <Text style={style.textCard} >{element}</Text>})}
                    </View>
                    </>
                    {digivolveColor !== null && digivolveColor !== undefined && (
                        <>
                        <Text style={style.textCard} >Digivolve colors</Text>
                        <View style={style.containerMultiStats}>
                            {digivolveColor && <Text style={style.multiTextCard} > {digivolveColor}</Text>}
                            {digivolveColor2 && <Text style={style.multiTextCard} >{digivolveColor2}</Text>}
                        </View>
                        </>
                    )}
                    {digivolveFrom !== null && digivolveFrom !== undefined && (
                        <>
                            <Text style={style.textCard}>Digivolve froms</Text>
                            <View style={style.containerMultiStats}>
                                {digivolveFrom && <Text style={style.multiTextCard}>{digivolveFrom}</Text>}
                                {digivolveFrom2 && <Text style={style.multiTextCard}>{digivolveFrom2}</Text>}
                            </View>
                        </>
                    )}
                    {digivolveCost !== null && digivolveCost !== undefined && (
                        <>
                            <Text style={style.textCard}>Digivolve costs</Text>
                            <View style={style.containerMultiStats}>
                                {(digivolveCost || digivolveCost == 0)  && <Text style={style.multiTextCard}>{digivolveCost}</Text>}
                                {(digivolveCost2 || digivolveCost2 == 0)  && <Text style={style.multiTextCard}>{digivolveCost2}</Text>}
                            </View>
                        </>
                    )}
            </View>
            <View style={ style.containerEffectSource } >
                {treated && <Text style={style.textCard} >{treated}</Text>}
                {specialEvolve && <Text style={style.textCard} >Digivolve: {specialEvolve}</Text>}
                {dnaDigivolve && <Text style={style.textCard} >{dnaDigivolve}</Text>}
                {effect !== undefined &&
                    <View style={style.containerTextEffect}>
                        {effect && effect !== undefined && <Text style={style.textCardEffect} >{effect}</Text>}
                        {effect2 && <Text style={style.textCardEffect} >{effect2}</Text>}
                        {effect3 && <Text style={style.textCardEffect} >{effect3}</Text>}
                        {effect4 && <Text style={style.textCardEffect} >{effect4}</Text>}
                        {effect5 && <Text style={style.textCardEffect} >{effect5}</Text>}
                    </View>
                }
                {inheritedEffect !== undefined &&
                    <View style={style.containerTextEffect}>
                        {inheritedEffect && <Text style={style.textCardEffect} >Inherited Effect: {inheritedEffect}</Text>}
                        {inheritedEffect2 && <Text style={style.textCardEffect} >Inherited Effect: {inheritedEffect2}</Text>}
                        {inheritedEffect3 && <Text style={style.textCardEffect} >Inherited Effect: {inheritedEffect3}</Text>}
                    </View>
                }
                {digiXcross && <Text style={style.textCard} >{digiXcross}</Text>}
                {securityEffect && <Text style={style.textCard} >Security Effect: {securityEffect}</Text>}
                <Text style={style.lastText} >Source: {source}</Text>
            </View>
            </View>
        }
      </Animated.View>
      <Button
        title="Flip Card"
        onPress={() => flipCard()}
        disabled={btnHabilitado}
      />
    </Modal>
}

export default ModalCard