import { StyleSheet } from 'react-native';
import { colorBackgroundCardBuy, colorBackgroundCardSell, colorBackgroundDeckBuilder} from '../constants/colors'

const padding = 10

const textButtonBase = {
    fontWeight:'bold',
    
}

let btnBase = {
    padding:padding, 
    width:110,
    alignItems:'center'
 
}

let buttonDeckBuilder = {
    ...btnBase,
    backgroundColor: colorBackgroundDeckBuilder
}
let buttonCardSell = {
    ...btnBase,
    backgroundColor: colorBackgroundCardSell,
}
let buttonCardBuy = {
    ...btnBase,
    backgroundColor: colorBackgroundCardBuy,    
}


export const btnsHeader = StyleSheet.create({
    container:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop:8,
    },
    
    buttonAdd:{
        ...btnBase,
        backgroundColor:'green',
    },
    buttonRemove:{
        ...btnBase,
        backgroundColor:'red',
    },
    buttonBack:{
        ...btnBase,
        backgroundColor:'black',
    },
    buttonCardBuy:{
        ...buttonCardBuy,
    },
    buttonCardSell:{
        ...buttonCardSell,
    },
    buttonDeckBuilder:{
        ...buttonDeckBuilder,
    },


    textButtonAdd:{
        ...textButtonBase,
        color:'white',
    },
    textButtonRemove:{
        ...textButtonBase,
        color:'white',
    },
    textButtonBack:{
        ...textButtonBase,
        color:'white',
    },
    textButton:{
        ...textButtonBase,
        color:'black',
    },
    textButtonSearch:{
        ...textButtonBase,
        color:'black',
        paddingTop:5,
    },
    inputSearch:{
        backgroundColor:'black', 
        color:'white', 
        borderRadius:30, 
        paddingHorizontal:10, 
        textAlign:'center'
    },
})