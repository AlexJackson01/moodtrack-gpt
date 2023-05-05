import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {Button} from 'react-native-paper';
import TypeWriter from 'react-native-typewriter';

import {useState} from 'react';

const Sliders = ({navigation}) => {
  const [sadHappy, setSadHappy] = useState(0);
  const [stressedRelaxed, setStressedRelaxed] = useState(0);
  const [tiredEnergetic, setTiredEnergetic] = useState(0);

  return (
    <View style={styles.container}>
      <TypeWriter typing={1} style={styles.greeting}>
        Hey Alex!
      </TypeWriter>
      <Text style={styles.moodHeading}>How are you feeling today?</Text>

      <Text style={styles.moodLabel}>Sad vs Happy</Text>
      <Slider
        style={{width: 220, height: 40, marginBottom: 20}}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor="#198699"
        thumbTintColor="#198699"
        maximumTrackTintColor="#000000"
        onValueChange={value => setSadHappy(value)}
        onSlidingComplete={value => setSadHappy(value)}
      />

      <Text style={styles.moodLabel}>Stressed vs Relaxed</Text>
      <Slider
        style={{width: 220, height: 40, marginBottom: 20}}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor="#198699"
        thumbTintColor="#198699"
        maximumTrackTintColor="#000000"
        onValueChange={value => setStressedRelaxed(value)}
        onSlidingComplete={value => setStressedRelaxed(value)}
      />

      <Text style={styles.moodLabel}>Tired vs Energetic</Text>
      <Slider
        style={{width: 220, height: 40, marginBottom: 20}}
        minimumValue={0}
        maximumValue={10}
        step={1}
        minimumTrackTintColor="#198699"
        thumbTintColor="#198699"
        maximumTrackTintColor="#000000"
        onValueChange={value => setTiredEnergetic(value)}
        onSlidingComplete={value => setTiredEnergetic(value)}
      />

      <Button
        mode="contained"
        buttonColor="#9155d4"
        style={styles.button}
        onPress={() => {
          navigation.navigate('Tabs', {
            screen: 'Track',
            params: {
            sadHappy: sadHappy,
            stressedRelaxed: stressedRelaxed,
            tiredEnergetic: tiredEnergetic,
            }
          });
        }}>
        Get Today's MoodTrack
      </Button>
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
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 10,
    elevation: 8,
  },
  greeting: {
    fontFamily: 'Playlist Script',
    fontSize: 25,
    paddingBottom: 10,
  },
  moodHeading: {
    fontSize: 17,
    paddingBottom: 30,
  },
  moodLabel: {
    fontStyle: 'italic',
    fontSize: 12,
  },
  button: {
    borderRadius: 0,
    marginTop: 10,
  },
});
export default Sliders;
