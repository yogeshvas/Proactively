import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Fonts} from '../../styles/font';
import {Colors} from '../../styles/color';
import Button from '../../components/Button';
import showToast from '../../utils/toast';
import {useHealthStore} from '../../store/healthStore';

const Steps = () => {
  const {steps, updateSteps} = useHealthStore();
  const [localSteps, setLocalSteps] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (steps) {
      setLocalSteps(steps.toString());
    }
  }, [steps]);

  useEffect(() => {
    setHasChanges(localSteps !== (steps?.toString() ?? ''));
  }, [localSteps, steps]);

  const handleStepsChange = (value: string) => {
    setLocalSteps(value);
  };

  const handleSubmit = async () => {
    try {
      await updateSteps(Number(localSteps));
      showToast('Steps Updated');
    } catch (error) {
      console.error('Error saving data:', error);
      showToast('Error saving data');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Steps count:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={localSteps}
              onChangeText={handleStepsChange}
              keyboardType="numeric"
              placeholder="0"
              maxLength={5}
            />
            <Text style={styles.unit}>steps</Text>
          </View>
        </View>
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
    marginBottom: 24,
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

export default Steps;
