import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Header} from 'native-base';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Transfer from '../screens/Transfer';
import StatusTransfer from '../screens/StatusTransfer';
import Confirmation from '../screens/Confirmation';
import Contact from '../screens/Contact';
import CreatePin from '../screens/CreatePin';
import CreateSuccess from '../components/CreatePin/CreateSuccess';
import History from '../screens/History';
import InputPin from '../screens/InputPin';
import ChangePassword from '../screens/ChangePassword';
import ChangePin from '../screens/ChangePin';
import Profile from '../screens/Profile';
import PersonalInformation from '../screens/PersonalInformation';
import SplashScreen from '../screens/SplashScreen';
const Stack = createStackNavigator();
// import {useSelector} from 'react-redux';

export default function AppRoutes() {
  // const {statusLogin} = useSelector((state) => state.authAPI);
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
        // initialRouteName={statusLogin === 200 ? 'BottomTab' : 'Login'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#CBE15A',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePin"
          component={CreatePin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateSuccess"
          component={CreateSuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: 'Find Receiver',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#6379F4',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{
            title: 'Transfer',
            headerTintColor: '#4D4B57',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(99, 121, 244, 0.2)',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{
            title: 'Confirmation',
            headerTintColor: '#4D4B57',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(99, 121, 244, 0.2)',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="InputPin"
          component={InputPin}
          options={{
            title: 'Enter Your PIN',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#6379F4',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="StatusTransfer"
          component={StatusTransfer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTintColor: '#4D4B57',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(99, 121, 244, 0.2)',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{
            title: 'Personal Information',
            headerTintColor: '#4D4B57',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(99, 121, 244, 0.2)',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            title: 'Change Password',
            headerTintColor: '#4D4B57',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(99, 121, 244, 0.2)',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePin}
          options={{
            title: 'Change PIN',
            headerTintColor: '#4D4B57',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(99, 121, 244, 0.2)',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: 'History',
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#6379F4',
              shadowColor: 'transparent',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        />
        {/* <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            title: 'Tambah Produk',
          }}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProduct}
          options={{
            title: 'Edit Produk',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Perbarui Informasi Akun',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
