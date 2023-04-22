import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {Button} from 'react-native-paper';
import TypeWriter from 'react-native-typewriter'

import {useState} from 'react';

const TrackGPT = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TypeWriter typing={1} style={styles.greeting}>MoodTrack of the Day</TypeWriter>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 50,
    marginBottom: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  greeting: {
    fontFamily: 'Playlist Script',
    fontSize: 25,
    paddingBottom: 10
  },
  moodHeading: {
    fontSize: 17,
    paddingBottom: 30
  },
  moodLabel: {
    fontStyle: 'italic',
    fontSize: 10
  },
  button: {
    borderRadius: 0,
    marginTop: 10
  }
});
export default TrackGPT;
