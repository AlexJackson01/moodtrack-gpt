import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {useEffect, useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_ANON_KEY} from '@env';
import LinearGradient from 'react-native-linear-gradient';
import MoodCharts from '../components/charts/MoodCharts';

const supabase = createClient(
  'https://rjguuofnbkbhecexfzox.supabase.co',
  `${SUPABASE_ANON_KEY}`,
);

const ChartsScreen = () => {
  const [sadHappy, setSadHappy] = useState();
  const [stressedRelaxed, setStressedRelaxed] = useState();
  const [tiredEnergetic, setTiredEnergetic] = useState();

  const getMoods = async () => {
    const {data} = await supabase.from('moods').select();

    setSadHappy([
      {value: Number(data[0].sadhappy)},
      {value: Number(data[1].sadhappy)},
      {value: Number(data[2].sadhappy)},
      {value: Number(data[0].sadhappy)},
      {value: Number(data[1].sadhappy)},
      {value: Number(data[2].sadhappy)},
      {value: Number(data[0].sadhappy)},
    ]);

    setStressedRelaxed([
      {value: Number(data[0].stressedrelaxed)},
      {value: Number(data[1].stressedrelaxed)},
      {value: Number(data[2].stressedrelaxed)},
      {value: Number(data[0].stressedrelaxed)},
      {value: Number(data[1].stressedrelaxed)},
      {value: Number(data[2].stressedrelaxed)},
      {value: Number(data[0].stressedrelaxed)},
    ]);

    setTiredEnergetic([
      {value: Number(data[0].tiredenergetic)},
      {value: Number(data[1].tiredenergetic)},
      {value: Number(data[2].tiredenergetic)},
      {value: Number(data[0].tiredenergetic)},
      {value: Number(data[1].tiredenergetic)},
      {value: Number(data[2].tiredenergetic)},
      {value: Number(data[0].tiredenergetic)},
    ]);
  };

  useEffect(() => {
    getMoods();
  }, []);

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

        <MoodCharts
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
});
export default ChartsScreen;
