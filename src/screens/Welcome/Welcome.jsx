import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import {images} from 'assets'
import FlatButton from 'lib/components/button/FlatButton'
import FormInput from 'lib/components/inputs/FormInputs'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
        <Image source={images.secure}  style={{
            width: 100,
            height: 100,
            marginTop: 20,
        }}/>
        <FlatButton title="Hello" />
        <Text style={{
            fontFamily:"Regular",
        }}>
            Hello
        </Text>


        <FormInput
            label="Email Address"
            keyboard="email"
        />
    </View>
  )
}

export default Welcome