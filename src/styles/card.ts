import { StyleSheet, Dimensions } from 'react-native';
const backgroundModal = "#1D201F";
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

export const cardStyle = StyleSheet.create({

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
    cardContainer:{
        // marginVertical:7,
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
        opacity:0.2
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
        width:'100%'
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
        ...lastText
    },

    
})