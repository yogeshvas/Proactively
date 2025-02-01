import {create} from 'zustand';
import {getData, storeData} from '../utils/async-cruds';
import {constants} from '../utils/constants';
import {HealthState} from '../utils/types';
export const useHealthStore = create<HealthState>((set, get) => ({
  steps: null,
  bmi: null,
  sleep: null,
  weight: null,
  height: null,
  isLoading: false,
  calculateBMI: (weight: number, height: number) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  },

  fetchHealthData: async () => {
    set({isLoading: true});
    try {
      const [steps, weight, height, sleep] = await Promise.all([
        getData(constants.STEPS_KEY),
        getData(constants.WEIGHT_KEY),
        getData(constants.HEIGHT_KEY),
        getData(constants.SLEEP_KEY),
      ]);

      const bmi = weight && height ? get().calculateBMI(weight, height) : null;

      set({
        steps,
        weight,
        height,
        sleep,
        bmi,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error fetching health data:', error);
      set({isLoading: false});
    }
  },

  updateSteps: async (steps: number) => {
    try {
      await storeData(constants.STEPS_KEY, steps);
      set({steps});
    } catch (error) {
      console.error('Error updating steps:', error);
      throw error;
    }
  },

  updateWeight: async (weight: number) => {
    try {
      await storeData(constants.WEIGHT_KEY, weight);
      const height = get().height;
      const bmi = height ? get().calculateBMI(weight, height) : null;
      set({weight, bmi});
    } catch (error) {
      console.error('Error updating weight:', error);
      throw error;
    }
  },

  updateHeight: async (height: number) => {
    try {
      await storeData(constants.HEIGHT_KEY, height);
      const weight = get().weight;
      const bmi = weight ? get().calculateBMI(weight, height) : null;
      set({height, bmi});
    } catch (error) {
      console.error('Error updating height:', error);
      throw error;
    }
  },

  updateSleep: async (sleep: number) => {
    try {
      await storeData(constants.SLEEP_KEY, sleep);
      set({sleep});
    } catch (error) {
      console.error('Error updating sleep:', error);
      throw error;
    }
  },
}));
