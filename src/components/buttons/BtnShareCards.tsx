import React, { useState } from 'react';
import Share from 'react-native-share';
import { Button } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';


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

export const BtnShareCards = ({ message='', cards, titlePrompt, guardarLista }) => {
  const imageUrls = cards.map((e) => e.imgUrl);
  cards.forEach( e =>{
    message += e.count + ' ' + e.name + ' del ' + e.source + '\n\n'
  })
  const shareMessage = () => {
    shareImages(message, imageUrls, titlePrompt);
  };
  guardarLista
  return (
    <Button title={titlePrompt} color={'green'} onPress={shareMessage} />
  );
};