import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.warn('ERROR OCCURRED');
    return null;
  }
}

export async function setData(key,val) {
    try {
      return await AsyncStorage.setItem(key,val);
    } catch (error) {
      console.warn('ERROR OCCURRED',error);
      return null;
    }
  }