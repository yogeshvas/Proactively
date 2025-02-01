import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import assets from '../../assets/assets';
import Button from '../../components/Button';
import {Fonts} from '../../styles/font';
import {storeData} from '../../utils/async-cruds';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login: React.FC = ({navigation}: any) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Mock authentication (Replace with API call)
    if (email === 'test@example.com' && password === 'password123') {
      storeData('user', {email: 'test@example.com', token: 'abc123'});
      navigation.navigate('home-tabs');
    } else {
      Alert.alert('Invalid credentials');
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F3" />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login to</Text>
        <View style={styles.logoContainer}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <Text style={styles.subtitle}>
          Login as a patient using your registered email.
        </Text>

        <TextInput
          style={[
            styles.input,
            emailFocused && styles.inputFocused,
            email ? styles.inputFilled : {},
          ]}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />

        <View
          style={[
            styles.passwordContainer,
            passwordFocused && styles.inputFocused,
            password ? styles.inputFilled : {},
          ]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.toggleButton}>
            <Image
              source={passwordVisible ? assets.showEye : assets.hideEye}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>

        <Button title="Login" onPress={() => handleLogin()} />

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.iSemiBold,
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 180,
    height: 50,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    fontFamily: Fonts.iMedium,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 12,
    fontFamily: Fonts.iMedium,
    backgroundColor: '#f9f9f9',
    height: 50,
  },
  inputFocused: {
    borderColor: '#1E73E9',
    borderWidth: 2,
  },
  inputFilled: {
    backgroundColor: '#f0f6ff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.iMedium,
  },
  toggleButton: {
    paddingLeft: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: 'gray',
    fontSize: 15,
    fontFamily: Fonts.iMedium,
  },
  signupLink: {
    color: '#1E73E9',
    fontSize: 15,
    fontFamily: Fonts.iMedium,
  },
  orContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: 'gray',
    fontFamily: Fonts.iMedium,
  },
});

export default Login;
