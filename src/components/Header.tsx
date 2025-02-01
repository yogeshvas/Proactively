import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import assets from '../assets/assets';
import {Fonts} from '../styles/font';
import {Colors} from '../styles/color';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Header = ({
  title,
  navigation,
}: {
  title: string;
  navigation: NativeStackNavigationProp<any, any>;
}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={styles.backIcon}
            source={assets.back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    backgroundColor: Colors.white,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.iMedium,
    marginLeft: 12,
  },
});
