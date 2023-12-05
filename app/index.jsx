import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'


const index = () => {
  return (
    <View style={styles.container}>
        
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

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})