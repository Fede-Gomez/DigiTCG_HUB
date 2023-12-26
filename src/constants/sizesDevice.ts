import { Dimensions } from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const alturaDevice = Dimensions.get('screen').height/20

let alto = alturaDevice
let letra = Dimensions.get('screen').height/30;
let altoAnchoImg = Dimensions.get('screen').height/13
function alturaDinamica() {
    if(alturaDevice >= 40){
        letra += 10
        alto += 13
        altoAnchoImg += 13
    }
    if(alturaDevice >= 38 && alturaDevice < 40){
        letra += 8
        alto += 10
        altoAnchoImg += 11.5
    }
    if(alturaDevice >= 35 && alturaDevice < 38){
        letra += 5
        alto += 8
        altoAnchoImg += 10
    }
}
alturaDinamica()
const lineaVertical = alto


function width() {
    return alto
}

function height() {
    return alto
}

function heightWidthImg() {
    return altoAnchoImg
}

function imgPlaceholder() {
    if(alturaDevice < 35){
        return 193
    }
    else{
        return 220
    }
}

function fontSize() {
    return letra
}

function paddingVertical() {
    return lineaVertical
}

function marginHorizontalReiniciarHistorial() {
    return hp(2)
}

function paddingVerticalReiniciarHistorial() {
    return hp(1)
}

function paddingHorizontalReiniciarHistorial() {
    return hp(1)
}

function fontSizeReiniciarHistorial() {
    return hp(2.5)
}

export {
    paddingVertical,
    fontSize,
    height,
    width,
    marginHorizontalReiniciarHistorial,
    paddingVerticalReiniciarHistorial,
    paddingHorizontalReiniciarHistorial,
    fontSizeReiniciarHistorial,
    heightWidthImg,
    imgPlaceholder
}