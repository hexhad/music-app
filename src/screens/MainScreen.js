import React,{useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import {getItunes} from '../api/service';
export default function MainScreen() {

  async function getSongs() {
    console.log(await rrgetItunes());
  }

  useEffect(()=>{
    getSongs();
  },[])
  return (
    <View>
      <Text>MainScreen</Text>
    </View>
  )
}