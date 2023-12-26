import { Dimensions, StyleSheet } from 'react-native';

let textBase = {
    borderRadius:30,
    marginVertical:8,
    fontSize:20,
    alignSelf:'center',
}


export const listCardsMyDeck = StyleSheet.create({

    container:{
        marginLeft:-8,
        marginBottom:8,
    },
    nameDeck:{
        ...textBase,
        backgroundColor:'grey',
        color:'white',
        padding:10,
    },
    buttonsViewUpdateDelete:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:8
    },
    count:{
        ...textBase,
        color:'white',
        backgroundColor:'purple',
        paddingHorizontal: 10
    },
    selectDecksContainer:{
        marginTop:Dimensions.get('screen').height/4
    },
    selectDecks:{
        backgroundColor:'red',
        borderRadius:8,
        paddingVertical:20,
        marginHorizontal:90,
        color:'white',
        textAlign: 'center',
        fontSize:30,
        marginTop:Dimensions.get('screen').height/4,
    },
})