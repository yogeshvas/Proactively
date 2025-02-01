import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import assets from '../assets/assets';
import {Fonts} from '../styles/font';
import {Colors} from '../styles/color';
import {doctorData} from '../data/data';

const MeetCard = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('appoinment')}
        style={styles.touchableContainer}>
        <View style={styles.topRow}>
          <Text style={styles.status}>UPCOMING</Text>
          <Image
            source={assets.arrowRight}
            resizeMode="contain"
            style={styles.arrowIcon}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContent}>
            <View style={styles.detailsHeader}>
              <View style={styles.textContainer}>
                <View style={styles.nameRow}>
                  <Text style={styles.name}>{doctorData.name}</Text>
                  <Text style={styles.title}>MD, DipABL...</Text>
                </View>
                <Text style={styles.specialty}>Internal medicine</Text>
              </View>
              <Image source={doctorData.avatar} style={styles.profileImage} />
            </View>
            <Text style={styles.dateTime}>
              Thu, December 21, 2024 | 10:00 AM PST
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 4,
  },
  touchableContainer: {
    borderWidth: 1,
    borderColor: '#dbdbdbc5',
    padding: 20,
    borderRadius: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    borderRadius: 3,
    fontFamily: Fonts.iMedium,
    backgroundColor: '#3A9B78',
    color: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  arrowIcon: {
    width: 15,
    height: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  detailsContent: {
    flex: 1,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'column',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: Fonts.iSemiBold,
    color: Colors.black,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.iRegular,
    color: Colors.gray,
  },
  specialty: {
    fontSize: 14,
    fontFamily: Fonts.iRegular,
    color: Colors.gray,
  },
  dateTime: {
    fontSize: 14,
    fontFamily: Fonts.iRegular,
    color: Colors.gray,
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
  },
});

export default MeetCard;
