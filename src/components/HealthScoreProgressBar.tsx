import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Rect, Polygon} from 'react-native-svg';
import {Fonts} from '../styles/font';

const getPointerColor = (value: number): string => {
  if (value <= 1000) return '#ff6b6b'; // Red
  if (value <= 2000) return '#FFD700'; // Yellow
  return '#4CAF50'; // Green
};

const HealthScoreProgressBar = ({CURRENT_VALUE}: {CURRENT_VALUE: number}) => {
  const MAX_VALUE = 3000;

  const progressPercentage = (CURRENT_VALUE / MAX_VALUE) * 100;
  const pointerColor = getPointerColor(CURRENT_VALUE);

  return (
    <View style={styles.container}>
      {/* Gradient Progress Bar */}
      <Svg height="20" width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#ff6b6b" stopOpacity="1" />
            <Stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
            <Stop offset="100%" stopColor="#4CAF50" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="5" width="100%" height="13" rx="8" fill="url(#grad)" />
      </Svg>

      {/* Pointer */}
      <View style={[styles.pointer, {left: `${progressPercentage}%`}]}>
        <Svg height="10" width="20">
          <Polygon points="10,0 0,10 20,10" fill={pointerColor} />
        </Svg>
      </View>

      {/* Labels */}
      <View style={styles.labelsContainer}>
        {[0, 600, 1200, 1800, 2400, 3000].map(label => (
          <Text key={label} style={styles.label}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HealthScoreProgressBar;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  pointer: {
    position: 'absolute',
    top: -7,
    transform: [{translateX: -10}, {rotate: '180deg'}],
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  label: {
    color: '#ccc',
    fontFamily: Fonts.iRegular,
    fontSize: 12,
  },
});
