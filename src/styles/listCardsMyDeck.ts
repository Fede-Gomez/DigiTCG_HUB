import { StyleSheet } from 'react-native';


export const listCardsMyDeck = StyleSheet.create({

    container:{
        flexDirection:'column',
        margin:8
    },
    nameDeck:{
        alignSelf:'center',
        marginVertical:8,
    },
    buttonsViewUpdateDelete:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:8
    },
    count:{
        alignSelf:'center',
        color: 'white'
    }
})