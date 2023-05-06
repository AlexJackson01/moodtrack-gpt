import {Image, StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';
import 'react-native-url-polyfill/auto';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import LandingScreen from './screens/LandingScreen';
import MoodInputScreen from './screens/MoodInputScreen';
import TrackScreen from './screens/TrackScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import LatestSongsScreen from './screens/LatestSongsScreen';
import ChartsScreen from './screens/ChartsScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Track') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (route.name === 'Latest') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline'
          } else if (route.name === 'Resources') {
            iconName = focused ? 'folder-sharp' : 'folder-outline'
          } else if (route.name === 'Moods') {
            iconName = focused ? 'bar-chart-sharp' : 'bar-chart-outline'
          }

          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#8C52FF',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen
        name='Track'
        options={{ headerShown: false }}
        component={TrackScreen}
      />
      <Tab.Screen
        name='Latest'
        options={{ headerShown: false }}
        component={LatestSongsScreen}
      />
            <Tab.Screen
        name='Moods'
        options={{ headerShown: false }}
        component={ChartsScreen}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MoodInput"
            component={MoodInputScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Tabs" options={{ headerShown: false}} component={NavTabs} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
