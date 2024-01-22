import { StyleSheet, Dimensions } from 'react-native';
import { colorBackgroundCardBuy, colorBackgroundCardSell, colorBackgroundDeckBuilder} from '../constants/colors'
import { TypeNavigation } from '../constants/typesNavigation';



export const cardStyle =(builderWishedSelling:string) =>{
    let textBase = {
        color: '#ffffff',
        fontSize: 15,
        borderColor:'#ffffff',
        textAlign:'center',
        flex:1
    }
    let singleText = {
        ...textBase,
        borderWidth:1,
    }
    let multiText = {
        ...textBase,
        borderWidth:1,
    
    }
    let effectsText = {
        ...textBase,
    }
    let firstText ={
        ...textBase,
        width:'100%',
        borderWidth:1,
    }
    let lastText ={
        ...textBase,
        width:'100%',
        borderWidth:1,
        
    }

    let countText = {
        position:'absolute', 
        right:5,
        backgroundColor:switchColorBackground(),
        paddingHorizontal:10,
        marginHorizontal: 10,
        borderRadius:20,
    }
    function switchColorBackground() {
        switch (builderWishedSelling) {
            case TypeNavigation.game.deckBuilder: return colorBackgroundDeckBuilder
            case TypeNavigation.game.cardsBuy: return colorBackgroundCardBuy
            case TypeNavigation.game.cardsSell: return colorBackgroundCardSell
        }
    }

    
    return StyleSheet.create({

    //          Buttons
    buttonsModalAddRemove:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:10,
    },

    //          modal
    modalContainerCard:{
        position:'absolute',
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    countText:{
        ...countText,
        bottom:50,
    },
    countTextDeck:{
        ...countText,
        bottom:15,
    },

    //          image
    imageCard:{
        height: 175, 
        width: Dimensions.get('window').width / 3.4,
        marginBottom:5,
    },
    imageCardModalZoomOff:{
        resizeMode:'contain',
        height:'100%',
        width:'100%',
    },
    imageCardModalZoomOn:{
        resizeMode:'contain',
        height:'50%',
        width:'100%',
    },
    imgFlipped:{
        resizeMode:'contain',
        height:'100%',
        width:'100%',
        opacity:0.35
    },
    imgNotFlipped:{
        resizeMode:'contain',
        height:'100%',
        width:'100%',
    },
    //          containers
    containerImgStats:{
        width:'100%'
    },
    containerStats:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    containerMultiStats:{
        flexDirection:'row',
        flex:1,
    },
    containerEffectSource:{
        marginBottom:15,
        width:'100%',
    },
    containerTextEffect:{
        borderColor:'#ffffff',
        borderWidth:1,
    },


    //          Text
    textCard:{
        ...singleText
    },
    multiTextCard:{
        ...multiText
    },
    textCardEffect:{
        ...effectsText
    },
    firstText:{
        ...firstText
    },
    lastText:{
        ...lastText,
    },

})} 
