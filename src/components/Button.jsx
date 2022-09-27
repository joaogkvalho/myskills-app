import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export function Button({ onHandleAddNewSkill }){
  return(
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={.7}
      onPress={onHandleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
    borderRadius: 7
  },
  buttonText: {
    color: '#fff',
  },
})