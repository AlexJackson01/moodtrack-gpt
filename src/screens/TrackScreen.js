import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TypeWriter from 'react-native-typewriter';
import Sliders from '../components/moodInput/Sliders';
import TrackGPT from '../components/track/TrackGPT';

const TrackScreen = ({route, navigation}) => {
  const {sadHappy, stressedRelaxed, tiredEnergetic} = route.params;

  return (
    <LinearGradient
      colors={['#9155d4', '#5a6db7', '#198699']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/MoodTrack_logo.png')}
            style={styles.logo}
          />
        </View>

        <TrackGPT
          sadHappy={sadHappy}
          stressedRelaxed={stressedRelaxed}
          tiredEnergetic={tiredEnergetic}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    position: 'absolute',
    top: 279,
    fontSize: 24,
    fontFamily: 'Playlist Script',
  },
});

export default TrackScreen;
