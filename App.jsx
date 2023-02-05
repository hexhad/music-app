import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNav from './src/navigation/BottomNav';
import LoginScreen from './src/screens/LoginScreen';
import {getData} from './src/storage/asyncStorage';

export default function App() {
  const [token, setToken] = useState(null);

  async function initTest(){
    setToken(await getData('TOKEN'));
  }
  useEffect(async() => {
    await initTest()
  }, []);

  return <>{token ? <BottomNav /> : <LoginScreen />}</>;
}
