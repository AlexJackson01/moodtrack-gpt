import {Image, StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';
import 'react-native-url-polyfill/auto';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import LandingScreen from './screens/LandingScreen';
import MoodInputScreen from './screens/MoodInputScreen';
import TrackScreen from './screens/TrackScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
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
          <Stack.Screen
            name="Track"
            component={TrackScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
