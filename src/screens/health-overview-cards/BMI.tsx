import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useHealthStore} from '../../store/healthStore';
import {Fonts} from '../../styles/font';
import {Colors} from '../../styles/color';
import Button from '../../components/Button';
import showToast from '../../utils/toast';

const BMI = () => {
  const {weight, height, updateWeight, updateHeight} = useHealthStore();

  const [localWeight, setLocalWeight] = useState('');
  const [localHeight, setLocalHeight] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize local state with store values
  useEffect(() => {
    if (weight) setLocalWeight(weight.toString());
    if (height) setLocalHeight(height.toString());
  }, []);

  // Check for changes whenever weight or height updates
  useEffect(() => {
    const hasWeightChanged = localWeight !== (weight?.toString() ?? '');
    const hasHeightChanged = localHeight !== (height?.toString() ?? '');
    setHasChanges(hasWeightChanged || hasHeightChanged);
  }, [localWeight, localHeight, weight, height]);

  // Handle weight change
  const handleWeightChange = (value: string) => {
    setLocalWeight(value);
  };

  // Handle height change
  const handleHeightChange = (value: string) => {
    setLocalHeight(value);
  };

  // Handle submit
  const handleSubmit = async () => {
    try {
      // Update both weight and height in the store
      await Promise.all([
        updateWeight(Number(localWeight)),
        updateHeight(Number(localHeight)),
      ]);
      showToast('BMI Updated');
    } catch (error) {
      console.error('Error saving data:', error);
      showToast('Error saving data');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Body */}
      <View style={styles.content}>
        {/* Weight Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Body weight:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={localWeight}
              onChangeText={handleWeightChange}
              keyboardType="numeric"
              placeholder="0"
              maxLength={5}
            />
            <Text style={styles.unit}>kgs</Text>
          </View>
        </View>

        {/* Height Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Height:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={localHeight}
              onChangeText={handleHeightChange}
              keyboardType="numeric"
              placeholder="0"
              maxLength={3}
            />
            <Text style={styles.unit}>cms</Text>
          </View>
        </View>

        {/* Submit Button */}
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!hasChanges}
          style={!hasChanges ? styles.disabledButton : null}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  inputContainer: {
    width: '40%',
    marginBottom: 24,
    maxWidth: 300,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: Fonts.iSemiBold,
    color: Colors.black,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
  },
  input: {
    flex: 1,
    fontSize: 32,
    fontFamily: Fonts.iSemiBold,
    padding: 0,
    minWidth: 80,
  },
  unit: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
    marginBottom: 2,
    width: 40,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default BMI;
