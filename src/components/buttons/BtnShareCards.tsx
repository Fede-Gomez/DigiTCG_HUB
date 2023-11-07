import React from 'react';
import Share from 'react-native-share';
import { TouchableOpacity, Text } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { useDeck } from '../../hooks';


const shareImages = async (message, imageUrls) => {
  try {
    const base64Images = await Promise.all(
      imageUrls.map(async (imageUrl) => {
        const response = await RNFetchBlob.config({ fileCache: true }).fetch('GET', imageUrl);
        const base64Data = await response.readFile('base64');
        return 'data:image/png;base64,' + base64Data;
      })
    );
    
    const shareOptions = {
      message,
      urls: base64Images,
    };

    await Share.open(shareOptions);
  } catch (error) {
    console.error('Error al compartir la imagen:', error);
  }
};

export const BtnShareCards = ({ tipoOperacion, message='', cards, titlePrompt='' }) => {
  const { saveCardsBuy, saveCardsSell } = useDeck()
  const imageUrls = cards.map((e) => e.imgUrl);
  cards.forEach( e =>{
    message += e.count + ' ' + e.name + ' del ' + e.source + '\n\n'
  })
  const shareMessage = () => {
    shareImages(message, imageUrls, titlePrompt);
    tipoOperacion == 'compra'
    ? saveCardsBuy(cards)
    : saveCardsSell(cards)
  };
  return (
    <TouchableOpacity
        onPress={()=>shareMessage()}
        style={{backgroundColor:'green', padding:10}}
      >
        <Text
          style={{fontSize:20, fontWeight:'bold', color:'white'}}
        >{titlePrompt}</Text>
      </TouchableOpacity>
  );
};