import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View>
      <Text style={style.logintext}>hi temu how was a nignt ?</Text>
    </View>
  );
}

export default login;

const style = StyleSheet.create({
    logintext:{
        color:"white"
    }
})