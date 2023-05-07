import {Dimensions, StyleSheet, Text, View} from 'react-native';
import TypeWriter from 'react-native-typewriter';
import {LineChart} from 'react-native-gifted-charts';
import {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';

const MoodCharts = ({sadHappy, stressedRelaxed, tiredEnergetic}) => {
  const [chartFilter, setChartFilter] = useState();
  
  useEffect(() => {
    console.log(sadHappy);
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
        {sadHappy && !chartFilter ? (
          <LineChart
            initialSpacing={20}
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
            isAnimated
            yAxisColor="#000"
            showVerticalLines
            width={220}
            verticalLinesColor="grey"
            xAxisColor="#000"
            color1="#9155d4"
            color2="#5a6db7"
            color3="#198699"
          />
        ) : (
          <LineChart
            initialSpacing={20}
            data={chartFilter}
            spacing={30}
            dataPointsHeight={10}
            dataPointsWidth={10}
            dataPointsColor={
              chartFilter === sadHappy
                ? '#9155d4'
                : chartFilter === stressedRelaxed
                ? '#5a6db7'
                : chartFilter === tiredEnergetic
                ? '#198699'
                : null
            }
            thickness={3}
            hideRules
            isAnimated
            yAxisColor="#000"
            showVerticalLines
            width={220}
            verticalLinesColor="grey"
            xAxisColor="#000"
            color={
              chartFilter === sadHappy
                ? '#9155d4'
                : chartFilter === stressedRelaxed
                ? '#5a6db7'
                : chartFilter === tiredEnergetic
                ? '#198699'
                : null
            }
          />
        )}
      </View>

      <View style={styles.chartFilters}>
        <Button
          mode="text"
          textColor="#9155d4"
          labelStyle={{
            fontSize: 10,
            backgroundColor: chartFilter === sadHappy ? 'lightgrey' : null,
          }}
          onPress={() => setChartFilter(sadHappy)}>
          Sad / Happy
        </Button>
        <Button
          mode="text"
          textColor="#5a6db7"
          labelStyle={{
            fontSize: 10,
            backgroundColor:
              chartFilter === stressedRelaxed ? 'lightgrey' : null,
          }}
          onPress={() => setChartFilter(stressedRelaxed)}>
          Stressed / Relaxed
        </Button>
        <Button
          mode="text"
          textColor="#198699"
          labelStyle={{
            fontSize: 10,
            backgroundColor:
              chartFilter === tiredEnergetic ? 'lightgrey' : null,
          }}
          onPress={() => setChartFilter(tiredEnergetic)}>
          Tired / Energetic
        </Button>
      </View>
      <Button
        mode="text"
        textColor="grey"
        labelStyle={{fontSize: 10, textDecorationLine: 'underline'}}
        onPress={() => setChartFilter(null)}>
        Clear Filters
      </Button>
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
  chartFilters: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default MoodCharts;
