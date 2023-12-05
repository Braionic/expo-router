import { View, Text, Button } from 'react-native'
import React from 'react'
import {Slot, Stack} from 'expo-router'

export default function Layout() {
  return (
         <Stack
      screenOptions={{
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen options={{headerStyle: {
          backgroundColor: '#333',
        },  headerLeft: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,}} name='index' />
        <Stack.Screen options={{title: 'Hello', headerTintColor: 'red'}} name='Profile' />
        <Stack.Screen name='login' options={{presentation: 'modal'}} />
        
    </Stack>

  )
}