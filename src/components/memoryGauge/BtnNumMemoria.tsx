import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { contadorMemoria } from '../../styles'
import { iconoContadorMemoria } from '../../assets/icons'
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { heightWidthImg } from '../../constants/sizesDevice';
interface props {
    changeContador: (a: number, b: number) => void;
    activo: string;
    jugador: number;
    memoriaJugador?: string;
    numMemoria: number;
    jugPrevio: number;
}

const BtnNumMemoria = ({ changeContador, activo, jugador, memoriaJugador, numMemoria, jugPrevio }: props) => {
    const style = contadorMemoria
    const memoria0 = () => {
        if (jugPrevio == 1)
            return style.memoriaInactivoJ1
        if (jugPrevio == 2)
            return style.memoriaInactivoJ2
        return style.ambosJugadores
    }

    return numMemoria == 0
        ? <>
            <LinearGradient
                colors={['#000000', '#ffffff']}
                style={{ ...style.containerMemoria0, transform: [{ rotate: '45deg' }] }}
            >
                <TouchableOpacity
                    onPress={() => changeContador(0, 0)}
                    activeOpacity={1}
                >
                    {
                        activo == 'j0_0'
                            ? <Image
                                source={iconoContadorMemoria}
                                style={{ 
                                    width: heightWidthImg(), 
                                    height: heightWidthImg(), 
                                    alignSelf: 'center', 
                                    marginTop: -hp(1.5), 
                                    transform: [{ rotate: '-45deg' }]
                             }}
                            />
                            : <Text style={{ ...memoria0(), transform: [{ rotate: '-45deg' }] }} >{numMemoria}</Text>
                    }

                </TouchableOpacity>
            </LinearGradient>
        </>
        : <>
            <TouchableOpacity
                style={jugador == 1 ? style.containerMemoriaJ1 : style.containerMemoriaJ2}
                onPress={() => changeContador(jugador, numMemoria)}
                activeOpacity={1}
            >
                {
                    activo == memoriaJugador
                        ? <Image
                            source={iconoContadorMemoria}
                            style={{ 
                                width: heightWidthImg(), 
                                height: heightWidthImg(), 
                                alignSelf: 'center', 
                                marginTop: -hp(1.5), 
                            }}
                         />
                        : <Text style={jugador == 1 ? style.memoriaInactivoJ1 : style.memoriaInactivoJ2}>{numMemoria}</Text>
                }
            </TouchableOpacity>
        </>
}

export default BtnNumMemoria