import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/AntDesign';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  return (
    <Calendar
      // Collection of dates that have to be colored in a special way. Default = {}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      renderArrow={(direction) => direction === 'left' ? <Icon name="left" size={30} color="#4F8EF7" /> : <Icon name="right" size={30} color="#4F8EF7" />}
      markedDates={{
        '2021-02-20': { textColor: 'green' },
        '2021-02-22': { startingDay: true, color: 'orange' },
        '2021-02-23': { selected: true, endingDay: true, color: 'orange', textColor: 'gray' },
        '2021-02-04': { disabled: true, startingDay: true, color: 'orange', endingDay: true }
      }}
      // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
      markingType={'period'}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    height: 600,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
});
