import React, {useState} from 'react'
import Modal from 'react-native-modal'
import { Button, View } from 'react-native';

export const ModalFilter = ( active:boolean ) => {
    const [isVisible, setIsVisible] = useState(active)
  return (
        <Modal
            isVisible={isVisible}

        >
          <View>
            <Button title="Back" onPress={()=>setIsVisible(false)}/>
          </View>
      </Modal>
  )
}
