import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useHealthStore} from '../../store/healthStore';
import {Fonts} from '../../styles/font';
import {Colors} from '../../styles/color';
import Button from '../../components/Button';
import showToast from '../../utils/toast';
import assets from '../../assets/assets';

const Sleep = () => {
  const {sleep, updateSleep} = useHealthStore();
  const [localDuration, setLocalDuration] = useState(8);
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize local state with store value
  useEffect(() => {
    if (sleep) {
      setLocalDuration(sleep);
    }
  }, []);

  // Check for changes whenever duration updates
  useEffect(() => {
    const hasDurationChanged = localDuration !== sleep;
    setHasChanges(hasDurationChanged);
  }, [localDuration, sleep]);

  const handleIncrease = () => {
    if (localDuration < 24) {
      setLocalDuration(prev => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (localDuration > 1) {
      setLocalDuration(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      await updateSleep(localDuration);
      showToast('Sleep Duration Updated');
    } catch (error) {
      console.error('Error saving data:', error);
      showToast('Error saving data');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        {/* Duration Selector */}
        <View style={styles.durationContainer}>
          <TouchableOpacity
            onPress={handleDecrease}
            style={styles.circleButton}>
            <Image source={assets.minus} style={styles.buttonIcon} />
          </TouchableOpacity>

          <View style={styles.durationWrapper}>
            <Image source={assets.sleep} style={styles.sleepIcon} />
            <Text style={styles.durationText}>{localDuration} hours</Text>
          </View>

          <TouchableOpacity
            onPress={handleIncrease}
            style={styles.circleButton}>
            <Image source={assets.add} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!hasChanges}
          style={[styles.submitButton, !hasChanges && styles.disabledButton]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24,
    padding: 25,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 15,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  durationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sleepIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  durationText: {
    fontSize: 18,
    fontFamily: Fonts.iSemiBold,
    color: Colors.black,
  },
  submitButton: {
    backgroundColor: '#4477FF',
    borderRadius: 12,
    padding: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default Sleep;
