import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import assets from '../assets/assets';
import {Colors} from '../styles/color';
import {Fonts} from '../styles/font';
import ProgressBar from './HealthScoreProgressBar';
import {userData} from '../data/data';

const HealthScoreCard = () => {
  const translateX = useRef(new Animated.Value(-400)).current; // Start position off-screen

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 400, // Move to right
        duration: 4000, // Adjust speed
        easing: Easing.linear,
        useNativeDriver: true, // Optimize for performance
      }),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Animated Image */}

      {/* Foreground Content */}
      <View>
        <View style={styles.header}>
          <Image style={styles.avatar} source={assets.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Image style={styles.bell} source={assets.bell} />
        </View>
        <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
          <Animated.Image
            source={assets.bgLogo} // Replace with your background logo image
            style={[
              styles.bgImage,
              {transform: [{translateX}]}, // Apply animation
            ]}
          />
          <View style={{marginTop: 10}}>
            <Text style={styles.healthScoreText}>Health Score</Text>
            <Text style={styles.score}>
              {userData.healthScore.toLocaleString()}
            </Text>
            <Text style={styles.infoText}>
              This score is for information purposes only.
            </Text>
          </View>
          {/* <Image
            source={assets.slider}
            resizeMode="contain"
            style={{width: '100%', height: 100}}
          /> */}
          <ProgressBar CURRENT_VALUE={userData.healthScore} />
        </View>
      </View>
    </View>
  );
};

export default HealthScoreCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    // backgroundColor: Colors.bgBlue,
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 200, // Adjust size as needed
    height: 200,
    // zIndex: 2, // Ensure background is behind content
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    resizeMode: 'contain',
    height: 45,
  },
  bell: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  name: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.iMedium,
  },
  healthScoreText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.iRegular,
    // marginTop: 10,
  },
  score: {
    color: Colors.white,
    fontSize: 32,
    marginTop: 40,
    fontFamily: Fonts.iBold,
  },
  infoText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.iRegular,

    marginTop: 5,
  },
});
