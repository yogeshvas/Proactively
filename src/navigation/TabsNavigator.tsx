import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Account from '../screens/main/Account';
import {Image} from 'react-native';
import {Fonts} from '../styles/font';
import {Colors} from '../styles/color';
import assets from '../assets/assets';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 20,
          paddingTop: 5,
          backgroundColor: 'white',
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          position: 'absolute',
          elevation: 3,
        },
        tabBarItemStyle: {
          paddingHorizontal: 40,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Fonts.iMedium,
        },
        
        tabBarActiveTintColor: Colors.purple, // Purple color for selected state
        tabBarInactiveTintColor: Colors.gray, // Gray color for unselected state
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? assets.homeSelected : assets.home}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? assets.accountSelected : assets.account}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
