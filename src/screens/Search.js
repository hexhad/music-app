import React,{useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import {getItunes} from '../api/service';
export default function Search() {

  async function getSongs() {
    console.log(await getItunes());
  }

  useEffect(()=>{
    getSongs();
  },[])
  return (
    <View>
      
    </View>
  )
}