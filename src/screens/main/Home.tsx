import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HealthScoreCard from '../../components/HealthScoreCard';
import {Colors} from '../../styles/color';
import MeetCard from '../../components/MeetCard';
import {ScrollView} from 'react-native-gesture-handler';
import HealthOverview from '../../components/HealthOverview';
import TodoCards from '../../components/ToDoCards';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: Colors.bgBlue,
        }}>
        <HealthScoreCard />
        <MeetCard navigation={navigation} />
        <HealthOverview navigation={navigation} />
        <TodoCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
