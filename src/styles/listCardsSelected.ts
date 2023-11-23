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

export const listCardsSelected = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:8
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
    buttonsAddRemove:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5
    },
    listEmpty:{
        backgroundColor:'red',
        borderRadius:8,
        padding:20,
        color:'white',
        textAlign: 'center',
        fontSize:30,
        marginTop:Dimensions.get('screen').height/4
     }
})