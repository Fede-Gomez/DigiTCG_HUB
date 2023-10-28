import { Dimensions, StyleSheet } from 'react-native';


export const listCardsMyDeck = StyleSheet.create({

    container:{
        flexDirection:'column',
        margin:8
    },
    nameDeck:{
        alignSelf:'center',
        marginVertical:8,
        color:'black',
        fontSize:25,
    },
    buttonsViewUpdateDelete:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:8
    },
    count:{
        alignSelf:'center',
        marginBottom:8,
        color:'black',
        fontSize:25,
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
        fontFamily:'digimon'
    },
})