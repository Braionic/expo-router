import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import { useRouter, router, Link } from 'expo-router'

export default function Home() {
    const router = useRouter()
  return (
    <View>
        <Link href={{pathname: 'blog/[id]', params: {id: 6000000}}}>
      <Text>index</Text>
      </Link>
      <Pressable onPress={()=> router.push('/Profile')}>
      <Text>Second Button</Text>
      </Pressable>
      
      <Link href='/login' asChild>
        <Button title='Login' />
      </Link>

      <Link href='(tabs)/home' asChild>
        <Button title='Tabs' />
      </Link>
    </View>
  )
}