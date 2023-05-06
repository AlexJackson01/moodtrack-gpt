import {Dimensions, StyleSheet, Text, View} from 'react-native';
import TypeWriter from 'react-native-typewriter';
import {LineChart} from 'react-native-gifted-charts';
import {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';

const MoodCharts = ({moods}) => {

    const [sadHappy, setSadHappy] = useState([
        {value: Number(moods[0].sadhappy)},
        {value: Number(moods[1].sadhappy)},
        {value: Number(moods[2].sadhappy)},
        {value: Number(moods[0].sadhappy)},
        {value: Number(moods[1].sadhappy)},
        {value: Number(moods[2].sadhappy)},
        {value: Number(moods[0].sadhappy)},
    ])

    const [stressedRelaxed, SetStressedRelaxed] = useState([
     {
      value: Number(moods[0].stressedrelaxed),
    },
    {
      value: Number(moods[1].stressedrelaxed),
    },
    {
      value: Number(moods[2].stressedrelaxed),
    },
    {
      value: Number(moods[0].stressedrelaxed),
    },
    {
      value: Number(moods[1].stressedrelaxed),
    },
    {
      value: Number(moods[2].stressedrelaxed),
    },
    {
      value: Number(moods[0].stressedrelaxed),
    },
    ])
    
    const [tiredEnergetic, SetTiredEnergetic] = useState([
     {
      value: Number(moods[0].tiredenergetic),
    },
    {
      value: Number(moods[1].tiredenergetic),
    },
    {
      value: Number(moods[2].tiredenergetic),
    },
    {
      value: Number(moods[0].tiredenergetic),
    },
    {
      value: Number(moods[1].tiredenergetic),
    },
    {
      value: Number(moods[2].tiredenergetic),
    },
    {
      value: Number(moods[0].tiredenergetic),
    },
    ])




useEffect(() => {
    console.log(moods)
}, []);


  return (
    <View style={styles.container}>
      <TypeWriter typing={1} style={styles.greeting}>
        MoodTracker
      </TypeWriter>

      <Button
        icon="calendar"
        mode="text"
        onPress={() => console.log('Pressed')}>
        Select Date
      </Button>

      <Text style={styles.moodHeading}>
        Tracking Moods from 10 August to 16 August 2022
      </Text>

      <View style={{backgroundColor: 'lightgrey', padding: 5}}>
        {moods && (
          <LineChart
            initialSpacing={0}
            data={sadHappy}
            data2={stressedRelaxed}
            data3={tiredEnergetic}
            spacing={30}
            dataPointsHeight={10}
            dataPointsWidth={10}
            dataPointsColor1="#9155d4"
            dataPointsColor2="#5a6db7"
            dataPointsColor3="#198699"
            thickness={3}
            hideRules
            hideYAxisText
            isAnimated
            yAxisColor="#000"
            showVerticalLines
            verticalLinesColor="#000"
            xAxisColor="#000"
            color1="#9155d4"
            color2="#5a6db7"
            color3="#198699"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 50,
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
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
    // fontSize: 17,
    paddingBottom: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 10,
  },
});
export default MoodCharts;
