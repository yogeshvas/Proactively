import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import assets from '../../assets/assets';
import {userData} from '../../data/data';
import {Colors} from '../../styles/color';
import {Fonts} from '../../styles/font';
import showToast from '../../utils/toast';
import {removeData} from '../../utils/async-cruds';

const Account = ({navigation}: {navigation: any}) => {
  const handleLogout = async () => {
    try {
      await removeData('user');
      showToast('Logged Out Successfully');
      navigation.reset({
        index: 0,
        routes: [{name: 'login'}], // Redirect to login screen
      });
    } catch (error) {
      showToast('Error Logging Out');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={assets.avatar} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
        </View>
      </View>

      {/* Account Options */}
      <View style={styles.optionsContainer}>
        <View style={styles.optionHeader}>
          <Image
            source={assets.account} // You'll need to add this icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionHeaderText}>Account</Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log out</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Version Info */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Proactively version 0.0.1</Text>
      </View>

      {/* Navigation Bar */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: Fonts.iSemiBold,
    color: Colors.black,
  },
  userEmail: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: Fonts.iMedium,

    marginTop: 4,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: Colors.black,
  },
  optionHeaderText: {
    fontSize: 16,
    color: Colors.black,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
  },
  chevron: {
    fontSize: 20,
    color: '#FF3B30',
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 70,
  },
  versionText: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: Fonts.iMedium,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  activeNavIcon: {
    tintColor: '#5856D6',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#5856D6',
  },
});

export default Account;
