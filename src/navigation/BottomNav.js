import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Search as SearchIcon, Book} from 'react-native-feather';
import Library from '../screens/Library';
import Search from '../screens/Search';
import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Home
              stroke={focused ? 'yellow' : 'red'}
                fill="#fff"
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({focused}) => (
              <SearchIcon
                stroke={focused ? 'yellow' : 'red'}
                fill="#fff"
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ focused, color }) => (
               <Book
               stroke={focused ? 'yellow' : 'red'}
                fill="#fff"
                width={20}
                height={20}
              />
            )
           
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
