import React, {useEffect, useState} from 'react';
import BottomNav from './src/navigation/BottomNav';
import LoginScreen from './src/screens/LoginScreen';
import {getData} from './src/storage/asyncStorage';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  const [token, setToken] = useState(null);

  async function initTest(){
    setToken(await getData('TOKEN'));
  }
  useEffect(() => {
    initTest();
  }, []);

  return (<Provider store={store}>{token ? <BottomNav /> : <LoginScreen />}</Provider>);
}
