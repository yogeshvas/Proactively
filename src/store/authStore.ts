import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isLoggedIn: boolean | null;
  checkLoginStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  isLoggedIn: null,
  checkLoginStatus: async () => {
    const user = await AsyncStorage.getItem('user');
    set({isLoggedIn: !!user});
  },
}));
