import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import {images} from 'assets'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
        <Image source={images.secure}  style={{
            width: 100,
            height: 100,
            marginTop: 20,

            
        }}/>
    </View>
  )
}

export default Welcome