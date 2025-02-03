import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/color';
import {Fonts} from '../../styles/font';
import assets from '../../assets/assets';
import Button from '../../components/Button';
import {doctorData} from '../../data/data';
const Appointment = () => {
  const handleJoinMeeting = () => {
    const meetingCode = 'abc-defa-dwa';
    const googleMeetAppURL = `https://meet.google.com/${meetingCode}`;
    const googleMeetDeepLink = `meet://meet.google.com/${meetingCode}`;

    if (Platform.OS === 'android') {
      Linking.openURL(googleMeetDeepLink).catch(() => {
        Linking.openURL(googleMeetAppURL);
      });
    } else {
      Linking.openURL(googleMeetAppURL);
    }
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {/* Upcoming Badge */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>UPCOMING</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            resizeMode="cover"
            source={doctorData.avatar}
          />
        </View>

        {/* Appointment Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>Your upcoming appointment with</Text>
          <Text style={styles.doctorName}>{doctorData.name}, MD, DipABLM</Text>

          {/* Appointment Type Badge */}
          <View style={styles.appointmentTypeBadge}>
            <Text style={styles.appointmentTypeText}>Appointment</Text>
          </View>

          {/* Date and Time */}
          <Text style={styles.dateTimeText}>
            Thu, December 21, 2024 | 10:00 AM PST
          </Text>

          {/* Meeting Link Section */}
          <View style={styles.meetingLinkContainer}>
            <Text style={styles.meetingLinkLabel}>Meeting link:</Text>
            <Text style={styles.meetingLinkText}>
              www.meet.google.com/abc-defa-dwa
            </Text>
          </View>
        </View>
      </View>

      {/* Join Button at the Bottom */}
      <View style={styles.buttonContainer}>
        <Button
          title="Join meeting"
          onPress={handleJoinMeeting}
          image={assets.link}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1, // Ensure it takes full height
    padding: 20,
  },
  content: {
    flex: 1, // Pushes the button to the bottom
  },
  buttonContainer: {
    alignSelf: 'stretch', // Makes the button take full width
    marginBottom: 16, // Add some space at the bottom
  },
  badgeContainer: {
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  badgeText: {
    backgroundColor: '#3A9B78',
    color: Colors.white,
    fontFamily: Fonts.iMedium,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  titleText: {
    fontSize: 20,
    fontFamily: Fonts.iMedium,
    color: Colors.black,
    marginBottom: 8,
    textAlign: 'center',
  },
  doctorName: {
    fontSize: 16,
    fontFamily: Fonts.iRegular,
    color: Colors.gray,
    marginBottom: 16,
    textAlign: 'center',
  },
  appointmentTypeBadge: {
    backgroundColor: '#F2E7FE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  appointmentTypeText: {
    color: '#6200EE',
    fontSize: 10,
    fontFamily: Fonts.iMedium,
  },
  dateTimeText: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 24,
    fontFamily: Fonts.iRegular,
  },
  meetingLinkContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    paddingTop: 16,
    marginTop: 16,
  },
  meetingLinkLabel: {
    fontSize: 14,
    fontFamily: Fonts.iSemiBold,
    fontWeight: 600,
    color: Colors.black,
    marginBottom: 4,
  },
  meetingLinkText: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: Fonts.iMedium,
  },
});

export default Appointment;
