import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const CardInfoScreen = (item) => {
    console.log(item.route.params)
    const navigate = useNavigation()

    return (
    <View>
        <Button
            onPress={ () => navigate.goBack() }
            title='back'
        />
        <Text>Hi</Text>
    </View>
  )
}

export default CardInfoScreen