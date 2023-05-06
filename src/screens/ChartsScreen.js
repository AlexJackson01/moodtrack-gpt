import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_ANON_KEY} from '@env';

const supabase = createClient(
  'https://rjguuofnbkbhecexfzox.supabase.co',
  `${SUPABASE_ANON_KEY}`,
);

const ChartsScreen = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    getMoods();
  }, []);

  const getMoods = async () => {
    const {data} = await supabase.from('moods').select();
    setMoods(data);
    console.log(moods)
  }

  return (
    <View>
      {moods.map(mood => (
        <Text key={mood.id}>{mood.date}</Text>
      ))}
    </View>
  );
};
export default ChartsScreen;
