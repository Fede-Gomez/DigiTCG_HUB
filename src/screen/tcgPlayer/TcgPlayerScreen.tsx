import React from 'react'
import { WebView } from 'react-native-webview'

export const TcgPlayerScreen = () => {
  return (
    <WebView
        source={{uri: 'https://www.tcgplayer.com/'}}
    />
  )
}
