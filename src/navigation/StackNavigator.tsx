import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from '../screens/main/Login';
import Home from '../screens/main/Home';
import HomeTabs from './TabsNavigator';
import Appoinment from '../screens/sub/Appoinment';
import Header from '../components/Header';
import BMI from '../screens/health-overview-cards/BMI';
import Steps from '../screens/health-overview-cards/Steps';
import Sleep from '../screens/health-overview-cards/Sleep';

const Stack = createStackNavigator();

const Navigation = ({initialRouteName}: {initialRouteName: string}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home-tabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="appoinment"
        component={Appoinment}
        options={{
          header: ({navigation}: {navigation: any}) => (
            <Header title="Appointment details" navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      {/* health overview card  */}
      <Stack.Screen
        name="bmi"
        component={BMI}
        options={{
          header: ({navigation}: {navigation: any}) => (
            <Header title="BMI entry" navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="steps"
        component={Steps}
        options={{
          header: ({navigation}: {navigation: any}) => (
            <Header title="Steps entry" navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="sleep"
        component={Sleep}
        options={{
          header: ({navigation}: {navigation: any}) => (
            <Header title="Sleep entry" navigation={navigation} />
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
