import { View, Text, Button } from 'react-native'
import React from 'react'
import {Slot, Stack} from 'expo-router'

export default function Layout() {
  return (
         <Stack
      screenOptions={{
        headerLeft: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
        <Stack.Screen options={{headerStyle: {
          backgroundColor: '#333',
        }}} name='index' />
        <Stack.Screen options={{title: 'Hello', headerTintColor: 'red'}} name='Profile' />
    </Stack>
  )
}