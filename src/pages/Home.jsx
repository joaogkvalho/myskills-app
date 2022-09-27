import React, { useEffect, useState } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home(){
  const [newSkill, setNewSkill] = useState('')
  const [skillList, setSkillsList] = useState([
    'ReactJS',
    'TypeScript',
    'NextJS',
    'HTML5',
    'ReactNative',
    'NodeJS'
  ])
  const [greenting, setGreeting] = useState('')

  function handleAddNewSkill(){
   if(newSkill){
    setSkillsList(oldState => [...oldState, newSkill])
    setNewSkill('')
   }
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if(currentHour < 12){
      setGreeting('Good morning')
    } else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])
  
  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, João</Text>
        <Text style={styles.greetings}>
          {greenting}
        </Text>

        <TextInput 
          onChangeText={setNewSkill}
          value={newSkill}
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#888"
        />
        <Button onHandleAddNewSkill={handleAddNewSkill} />

        <Text style={[styles.title, { marginTop: 50, marginBottom: 30 }]}>
          My Skills
        </Text>

        <FlatList 
          data={skillList}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <SkillCard skill={item} />
          )}
        />
      </View>      
    </>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 18 : 16,
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 12,
    borderRadius: 7
  },
  greetings: {
    color: '#fff'
  }
})