import { StyleSheet } from 'react-native';
import { colorBackgroundCardBuy, colorBackgroundCardSell, colorBackgroundDeckBuilder} from '../constants/colors'

const padding = 10

const textButtonBase = {
    fontWeight:'bold',
    color:'white',
}

let btnBase = {
    padding:padding, 
}

let countBase = {
    alignSelf:'center',
    fontSize:16,
    paddingHorizontal:5,
    marginHorizontal: 5,
    borderRadius:20,
    color:'black'
}


let countDeckBuilder = {
    ...countBase,
    backgroundColor: colorBackgroundDeckBuilder,
}
let countCardSell = {
    ...countBase,
    backgroundColor: colorBackgroundCardSell,
}
let countCardBuy = {
    ...countBase,
    backgroundColor: colorBackgroundCardBuy,
}

export const btnsAddRemove = StyleSheet.create({
    container:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop:8 
    },
    
    buttonAdd:{
        ...btnBase,
        backgroundColor:'green',
        marginRight:8
    },
    buttonRemove:{
        ...btnBase,
        backgroundColor:'red',
    },


    textButtonAdd:{
        ...textButtonBase,
    },
    textButtonRemove:{
        ...textButtonBase,
    },

    countDeckBuilder:{
        ...countDeckBuilder
    },
    countCardSell:{
        ...countCardSell
    },
    countCardBuy:{
        ...countCardBuy
    },

})