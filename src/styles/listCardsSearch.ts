import { StyleSheet } from 'react-native';
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


export const listCardsSearch = StyleSheet.create({
    container:{
        flexDirection:'column',
        marginVertical:10,
        marginRight:13,
    },
    buttonsAddRemove:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    headerList:{
        flex:1, 
        flexDirection:'row', 
        justifyContent: 'space-around',
        marginTop:16,
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
})