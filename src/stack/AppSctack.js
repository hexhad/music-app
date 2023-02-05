import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import SongInfo from '../screens/SongInfo';
import Library from '../screens/Library';
import Search from '../screens/Search';

const Stack = createStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="SongInfo" component={SongInfo} />
      </Stack.Navigator>
  );
}
