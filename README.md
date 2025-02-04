# React Native Mobile Application

## Overview
This is a simple yet fully functional React Native mobile application built with a focus on user experience and responsiveness. The app includes authentication, local data management, push notifications, and dynamic health tracking.

## Video Demonstration
Android & iOS build demonstration video: https://drive.google.com/drive/folders/1vOPoTBx10kLxrz0KBxexXwn2r_N8wRtA?usp=sharing

## Repository Link
GitHub: https://github.com/yogeshvas/Proactively

## Notes
- Fully tested and working on both Android & iOS.
- Smooth navigation, persistent data, and interactive UI elements.
- The Whole app uses a single button and its functionalty is passed based on Props.
- App uses a single store for everything.
- Colors have a seperate files since same pallete was used everywhere to reduce hardcoding for it.
- Built on typescript so custom types are defined seperately.
- Used Zutand for state Management.
(wasn't able to check the notification part in IOS since it requires developer account for access token)


## Features Implemented
- **Authentication**: Login with credential persistence using AsyncStorage.
- **Tab-Based Navigation**:
  - **Home Tab**: Displays health data, to-do lists, and upcoming appointments.
  - **Account Tab**: Shows user profile with logout functionality.
- **Home Tab Components**:
  - **Health Score Banner**: Progress bar with dynamic gradient and animated arrow.
  - **Upcoming Appointments**: Displays details and navigates via push notifications.
  - **Health Overview**:
    - Steps: Numeric input for daily steps.
    - BMI: Height and weight input with calculated BMI display.
    - Sleep: Custom input for sleep hours.
  - **To-Do List**: Checklist with dynamic progress bar.
- **Push Notifications**:
  - Integrated **Firebase Cloud Messaging (FCM)** for appointment reminders.
  - Click notifications to navigate directly to **Appointment Details**.
  - Google Meet integration for joining meetings(using intent).
- **Session Management**: Secure credential storage and automatic login.
- **Custom Branding**: App icon and splash screen (except splash screen implementation pending).

## Installation & Setup
```bash
# Clone the repository
git clone <repo-link>
cd Proactively

# Install dependencies
npm install 

# Run the app on Android
npx react-native run-android

# Run the app on iOS (Mac required)
pod-install
react-native run-ios
```


