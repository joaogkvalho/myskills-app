import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export function SkillCard({ skill }){
  return(
    <TouchableOpacity 
      style={[styles.skillButton]}
      activeOpacity={.7}
    >
      <Text style={styles.skillText}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: '#1f1e25',
    padding: 18,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  skillText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})