import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../styles/color';
import {Fonts} from '../styles/font';
import assets from '../assets/assets';
import {useHealthStore} from '../store/healthStore';

const HealthOverview = ({navigation}: {navigation: any}) => {
  const {steps, bmi, sleep, fetchHealthData} = useHealthStore();

  useEffect(() => {
    fetchHealthData();
  }, []);

  const data = [
    {
      title: 'Steps',
      value: steps ?? '-',
      unit: '',
      color: '#E9F0FF',
      textColor: '#4F65CB',
      icon: assets.arrowRightBlue,
      navigateTo: 'steps',
      status: steps ? 'Updated' : 'No data',
    },
    {
      title: 'BMI',
      value: bmi ?? '-',
      unit: 'kg/m²',
      color: '#FBFFC8',
      textColor: '#7B8400',
      icon: assets.arrowRightYellow,
      navigateTo: 'bmi',
      status: bmi ? 'Updated' : 'No data',
    },
    {
      title: 'Sleep',
      value: sleep ?? '-',
      unit: 'Hours',
      color: '#FFECC8',
      textColor: '#B27500',
      icon: assets.arrowRightOrange,
      navigateTo: 'sleep',
      status: sleep ? 'Updated' : 'No data',
    },
  ];

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.navigateTo)}
      style={[styles.card, {backgroundColor: item.color}]}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Image
          source={item.icon}
          style={styles.cardIcon}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.cardSubtitle, {color: item.textColor}]}>
        {item.status}
      </Text>
      <View style={styles.cardValueContainer}>
        <Text style={[styles.cardValue, {color: item.textColor}]}>
          {item.value.toLocaleString()}
        </Text>
        <Text style={styles.cardUnit}>{item.unit}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Health Overview</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default HealthOverview;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingRight: 0,
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.iSemiBold,
    color: '#333',
    marginBottom: 10,
  },
  flatListContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  card: {
    width: 150,
    borderRadius: 10,
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Fonts.iSemiBold,
    color: '#555',
  },
  cardIcon: {
    width: 15,
    height: 15,
  },
  cardSubtitle: {
    fontSize: 12,
    fontFamily: Fonts.iRegular,
    marginVertical: 5,
  },
  cardValueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  cardValue: {
    fontSize: 24,
    fontFamily: Fonts.iBold,
    color: Colors.primary,
  },
  cardUnit: {
    fontSize: 14,
    fontFamily: Fonts.iRegular,
    color: 'gray',
    paddingBottom: 3,
  },
});
