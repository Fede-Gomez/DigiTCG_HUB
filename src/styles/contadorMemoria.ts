import { StyleSheet, PixelRatio } from 'react-native';
const sizeHeightScreen = PixelRatio.get()*160
const size440 = {
    width:50,
    height:50,
    fontSize:35,
    paddingVertical:25
}
const size420 = {
    width:60,
    height:60,
    fontSize:45,
    paddingVertical:25
}

const size400 = {
    width:60,
    height:60,
    fontSize:45,
    paddingVertical:25
}
function width() {
    switch (sizeHeightScreen) {
        case 440:
            return size440.width
        case 420:
            return size420.width
        case 400:
            return size400.width
    }
}

function height() {
    switch (sizeHeightScreen) {
        case 440:
            return size440.height
        case 420:
            return size420.height
        case 400:
            return size400.height
    }
}

function fontSize() {
    switch (sizeHeightScreen) {
        case 440:
            return size440.fontSize
        case 420:
            return size420.fontSize
        case 400:
            return size400.fontSize
    }
}

function paddingVertical() {
    switch (sizeHeightScreen) {
        case 440:
            return size440.paddingVertical
        case 420:
            return size420.paddingVertical
        case 400:
            return size400.paddingVertical
    }
}


const estiloNumBase = {
    textAlign:'center',
    fontSize:fontSize(),
}
const containerMemoriaBase = {
    borderRadius:80,
    width:width(),
    height:height(),
}
const lineaBaseHorizontal = {
    height:5,
    paddingHorizontal:20,
}
const lineaBaseVertical = {
    paddingVertical:paddingVertical(),
    width:5,
    alignSelf:'center',
    position:'absolute',
    top:40,
    zIndex:-1
}

export const contadorMemoria = StyleSheet.create({
    // btn y txt de reset e historial
    btnHistorialReset:{
        marginHorizontal:25,
        backgroundColor:'white',
    },
    txtHistorialReset:{
        color:'black',
        paddingVertical:5,
        paddingHorizontal:10,
        fontSize:25
    },



    // contenedores
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerMemoria0:{
        ...containerMemoriaBase,
    },
    containerMemoriaJ1:{
        ...containerMemoriaBase,
        backgroundColor:'black',
    },
    containerMemoriaJ2:{
        ...containerMemoriaBase,
        backgroundColor:'white',
    },
    containerNumber: {
        flexDirection:'row', 
        marginVertical:15, 
        alignItems:'center',
    },



    // circulos de memoria
    ambosJugadores:{
        ...estiloNumBase,
        transform:[{rotate:'-45deg'}],
        color:'gold'
    },
    memoriaActivoJ1:{
        ...estiloNumBase,
        color:'skyblue',
        transform:[{rotate:'180deg'}]
    },
    memoriaInactivoJ1:{
        ...estiloNumBase,
        color:'white',
        zIndex:20,
        transform:[{rotate:'180deg'}]
    },
    memoriaActivoJ2:{
        ...estiloNumBase,
        color:'red',
    },
    memoriaInactivoJ2:{
        ...estiloNumBase,
        color:'black'
    },


    // lineas que unen los circulos
    lineaHorizontalPlayer1:{
        ...lineaBaseHorizontal,
        backgroundColor:'white'
    },
    lineaVerticalDerPlayer1:{
        ...lineaBaseVertical,
        backgroundColor:'white',
    },
    lineaVerticalIzqPlayer1:{
        ...lineaBaseVertical,
        backgroundColor:'white',
    },

    lineaHorizontalPlayer2:{
        ...lineaBaseHorizontal,
        backgroundColor:'black'
    },
    lineaVerticalDerPlayer2:{
        ...lineaBaseVertical,
        backgroundColor:'black',
    },
    lineaVerticalIzqPlayer2:{
        ...lineaBaseVertical,
        backgroundColor:'black',
    },
})