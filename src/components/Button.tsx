// types.ts

// Button.tsx
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonProps} from '../utils/types';
import {Fonts} from '../styles/font';
import {Colors} from '../styles/color';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  image,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      disabled={disabled}>
      <Text style={[styles.text, disabled && styles.textDisabled]}>
        {title}
      </Text>
      {image && (
        <Image
          source={image}
          style={[styles.image, disabled && styles.imageDisabled]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: Colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    gap: 3,
  },
  buttonDisabled: {
    backgroundColor: Colors.primary + '80', // Adding 50% opacity
    shadowOpacity: 0.1,
    elevation: 1,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.iMedium,
  },
  textDisabled: {
    opacity: 0.8,
  },
  image: {
    width: 20,
    height: 20,
  },
  imageDisabled: {
    opacity: 0.8,
  },
});
