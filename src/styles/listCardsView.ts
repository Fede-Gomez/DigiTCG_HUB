import { Dimensions, StyleSheet } from 'react-native';
import { colorBackgroundCardBuy, colorBackgroundCardSell, colorBackgroundDeckBuilder} from '../constants/colors'

let titleSectionBase = {
    alignSelf: 'center', 
    color: 'black', 
    fontSize: 22, 
    marginVertical: 10, 
    padding:10, 
    borderRadius:30, 
}

let titleDeckBuilder = {
    ...titleSectionBase,
    backgroundColor: colorBackgroundDeckBuilder
}
let titleCardSell = {
    ...titleSectionBase,
    backgroundColor: colorBackgroundCardSell,
}
let titleCardBuy = {
    ...titleSectionBase,
    backgroundColor: colorBackgroundCardBuy,    
}

export const listCardsView = StyleSheet.create({
    container:{
        marginLeft:-8,
        marginBottom:8
    },
    buttonsAddRemove:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:5,
    },
    titleDeckBuilder:{
        ...titleDeckBuilder
    },
    titleCardSell:{
        ...titleCardSell
    },
    titleCardBuy:{
        ...titleCardBuy
    },
    searchCard:{
        backgroundColor:'silver', 
        color:'black', 
        textAlign:'center',
        marginBottom:10
    },
    listEmpty:{
        backgroundColor:'red',
        borderRadius:8,
        padding:20,
        color:'white',
        textAlign: 'center',
        fontSize:30,
        marginTop:Dimensions.get('screen').height/4
     },
})