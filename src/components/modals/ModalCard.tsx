import React, {useEffect, useRef, useState} from 'react'
import { View, Image, Text, Button, Easing } from 'react-native';
import { useApp } from '../../hooks';
import { useAppSelector } from '../../hooks/useReducerHook';
import Modal from "react-native-modal";
import { cardStyle } from '../../styles';
import { Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { placeholderCard } from '../../assets/backgrounds';


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
        digivolveColor3, 
        digivolveColor4, 
        digivolveCost, 
        digivolveCost2, 
        digivolveCost3, 
        digivolveCost4, 
        digivolveFrom, 
        digivolveFrom2, 
        digivolveFrom3, 
        digivolveFrom4, 
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
        ace,
    } = card;
    
    const style = cardStyle('');

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
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        });
      };
  
    useEffect(() => {
        startFlipAnimation();
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
        key={name+'Modal'}
    >
        <Animatable.Text key={name+'AnimatedText'} animation="fadeOutUp" iterationCount={'infinite'} direction="alternate" duration={2500} style={{color:'white', fontSize:20, fontWeight:'bold', top:50}}>Desliza arriba o abajo para salir</Animatable.Text>
      <Animated.View
        style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotateY: imageRotate }]}}
            key={name+'AnimatedView'}
      >
        <Image
          source={isFliped ? placeholderCard : { uri: imgUrl }}
          style={isFliped ? style.imgFlipped : style.imgNotFlipped }
          key={name+'Image'}
        />
        {isFliped &&
            <View style={style.modalContainerCard} key={name+'ContainerModalCard'}>
            <View style={style.containerImgStats} key={name+'ContainerImgStats'}>
                    <Text style={style.firstText} key={name+'Name'}>{name}</Text>
                <View style={style.containerStats} key={name+'ContainerPowerLevelAttribute'}>
                    {power && <Text style={style.textCard} key={name+'Power'}>Power: {power}</Text>}
                    {level && <Text style={style.textCard} key={name+'Level'}>Level: {level}</Text>}
                    {attribute && <Text style={style.textCard} key={name+'Attribute'}>Atributo: {attribute}</Text>}
                </View>
                <View style={style.containerStats} key={name+'ContainerCardTypeStageLevelCardNumber'}>
                    <Text style={style.textCard} key={name+'CardType'}>Card type: {cardType}</Text>
                    {stageLevel && <Text style={style.textCard} key={name+'StageLevel'}>Stage level: {stageLevel}</Text>}
                    <Text style={style.textCard} key={name+'CardNumber'}>Card number: {cardNumber}</Text>                
                </View>
                <View style={style.containerStats} key={name+'ContainerPlaycostRarityColor'}>
                    {playCost !== null && playCost !== undefined && (
                        <Text style={style.textCard} key={name+'Playcost'}>Playcost: {playCost}</Text>
                    )}
                    <Text style={style.textCard} key={name+'Rarity'}>Rarity: {rarity}</Text>
                    <Text style={style.textCard} key={name+'Color'}>Color: {color}</Text>
                </View>
                    {digivolveColor !== null && digivolveColor !== undefined && (
                        <>
                        <View style={style.containerMultiStats} key={name+'ContainerDigivolveColor'}>
                            <Text style={style.textCard} key={name+'DigivolveColorText'}>Digivolve colors</Text>
                            <View style={style.containerMultiStats}>
                                {digivolveColor && <Text style={style.multiTextCard} key={name+'DigivolveColor1'}> {digivolveColor}</Text>}
                                {digivolveColor2 && <Text style={style.multiTextCard} key={name+'DigivolveColor2'}>{digivolveColor2}</Text>}
                                {digivolveColor3 && <Text style={style.multiTextCard} key={name+'DigivolveColor3'}>{digivolveColor3}</Text>}
                                {digivolveColor4 && <Text style={style.multiTextCard} key={name+'DigivolveColor4'}>{digivolveColor4}</Text>}
                            </View>
                        </View>
                        </>
                    )}
                    {digivolveFrom !== null && digivolveFrom !== undefined && (
                        <>
                            <View style={style.containerMultiStats} key={name+'ContainerDigivolveFroms'}>
                                <Text style={style.textCard} key={name+'DigivolveFromsText'}>Digivolve froms</Text>
                                <View style={style.containerMultiStats} key={name+'DigivolveFroms'}>
                                    {digivolveFrom && <Text style={style.multiTextCard} key={name+'DigivolveFroms1'}>{digivolveFrom}</Text>}
                                    {digivolveFrom2 && <Text style={style.multiTextCard} key={name+'DigivolveFroms2'}>{digivolveFrom2}</Text>}
                                    {digivolveFrom3 && <Text style={style.multiTextCard} key={name+'DigivolveFroms3'}>{digivolveFrom3}</Text>}
                                    {digivolveFrom4 && <Text style={style.multiTextCard} key={name+'DigivolveFroms4'}>{digivolveFrom4}</Text>}
                                </View>
                            </View>
                        </>
                    )}
                    {digivolveCost !== null && digivolveCost !== undefined && (
                        <>
                            <View style={style.containerMultiStats} key={name+'ContainerDigivolveCost'}>
                                <Text style={style.textCard} key={name+'DigivolveCostText'}>Digivolve costs</Text>
                                <View style={style.containerMultiStats} key={name+'DigivolveCost'}>
                                    {(digivolveCost || digivolveCost == 0)  && <Text style={style.multiTextCard} key={name+'DigivolveCost1'}>{digivolveCost}</Text>}
                                    {(digivolveCost2 || digivolveCost2 == 0)  && <Text style={style.multiTextCard} key={name+'DigivolveCost2'}>{digivolveCost2}</Text>}
                                    {(digivolveCost3 || digivolveCost3 == 0)  && <Text style={style.multiTextCard} key={name+'DigivolveCost3'}>{digivolveCost3}</Text>}
                                    {(digivolveCost4 || digivolveCost3 == 0)  && <Text style={style.multiTextCard} key={name+'DigivolveCost4'}>{digivolveCost4}</Text>}
                                </View>
                            </View>
                        </>
                    )}
                    <>
                        {traits && <Text style={style.textCard} key={name+'TraitsText'}>Traits</Text>}
                        <View style={style.containerMultiStats} key={name+'ContainerTraits'}>
                            {traits?.map(element => {return <Text style={style.textCard} key={name+'Trait'+element} >{element}</Text>})}
                        </View>
                    </>
            </View>
            <View style={ style.containerEffectSource } key={name+'ContainerTreatedSpecialEvolveDnaDigivolveEffectInheritedEffect'} >
                {treated && <Text style={style.textCard} key={name+'TreatedText'} >{treated}</Text>}
                {specialEvolve && <Text style={style.textCard} key={name+'SpecialEvolveText'}>{specialEvolve}</Text>}
                {dnaDigivolve && <Text style={style.textCard} key={name+'DnaDigivolveText'}>{dnaDigivolve}</Text>}
                {effect !== undefined &&
                    <View style={style.containerTextEffect} key={name+'ContainerEffects'}>
                        {effect && effect !== undefined && <Text style={style.textCardEffect} key={name+'EffectText1'}>{effect}</Text>}
                        {effect2 && <Text style={style.textCardEffect} key={name+'EffectText2'}>{effect2}</Text>}
                        {effect3 && <Text style={style.textCardEffect} key={name+'EffectText3'}>{effect3}</Text>}
                        {effect4 && <Text style={style.textCardEffect} key={name+'EffectText4'}>{effect4}</Text>}
                        {effect5 && <Text style={style.textCardEffect} key={name+'EffectText5'}>{effect5}</Text>}
                    </View>
                }
                {inheritedEffect !== undefined &&
                    <View style={style.containerTextEffect} key={name+'ContainerInheritedEffects'}>
                        {ace && <Text style={style.textCardEffect} key={name+'AceEffect'}>{ace}</Text>}
                        {inheritedEffect && <Text style={style.textCardEffect} key={name+'InheritedEffect1'}>Inherited Effect: {inheritedEffect}</Text>}
                        {inheritedEffect2 && <Text style={style.textCardEffect} key={name+'InheritedEffect2'}>Inherited Effect: {inheritedEffect2}</Text>}
                        {inheritedEffect3 && <Text style={style.textCardEffect} key={name+'InheritedEffect3'}>Inherited Effect: {inheritedEffect3}</Text>}
                    </View>
                }
                {digiXcross && <Text style={style.textCard} key={name+'DigiCrossText'}>{digiXcross}</Text>}
                {securityEffect && <Text style={style.textCard} key={name+'SecurityEffect'}>Security Effect: {securityEffect}</Text>}
                <Text style={style.lastText} key={name+'Source'}>Source: {source}</Text>
            </View>
            </View>
        }
      </Animated.View>
      <Button
        title="Voltear carta"
        onPress={() => flipCard()}
        disabled={btnHabilitado}
        key={name+'ButtonFlip'}
      />
    </Modal>
}

export default ModalCard