import { View, Text, Button } from 'react-native'
import React from 'react'
import { Tabs, useRouter} from 'expo-router'


export default function Tab() {
    const router = useRouter()
  return (
    <Tabs>
        <Tabs.Screen options={{tabBarLabel: 'Home Page', headerTintColor: 'black', headerLeft: ()=> <Button title='goback' onPress={()=> router.back()} />}} name='home' />
    </Tabs>
  )
}