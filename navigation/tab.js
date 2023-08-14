import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import Home from '../screens/Home';
import More from '../screens/More';
import Post from '../screens/Post';
import Rewards from '../screens/Rewards';
import Settings from '../screens/Settings';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#fff',
          borderRadius: 25,
          height: 90,
          marginBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../icons/Home.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 45 : 35,
                  height: focused ? 40 : 30,
                  tintColor: focused ? 'blue' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 4,
                  marginTop: 5,
                  color: focused ? 'blue' : '#748c94',
                }}>
                Home
              </Text>
            </View>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../icons/Accounts.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 45 : 35,
                  height: focused ? 40 : 30,
                  tintColor: focused ? 'blue' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: -10,
                  marginTop: 5,
                  color: focused ? 'blue' : '#748c94',
                }}>
                Settings
              </Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../icons/plus.png')}
              resizeMode="contain"
              style={{
                width: 50,
                marginTop: -70,
                marginLeft: -10,
                padding: 5,
                height: 50,
                borderRadius: 30,
                backgroundColor: 'red',
              }}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../icons/Rewards.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 45 : 35,
                  height: focused ? 40 : 30,
                  tintColor: focused ? 'blue' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: -10,
                  marginTop: 5,
                  color: focused ? 'blue' : '#748c94',
                }}>
                Rewards
              </Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../icons/Hamburger.png')}
                resizeMode="stretch"
                style={{
                  width: focused ? 55 : 35,
                  height: focused ? 40 : 30,
                  tintColor: focused ? 'blue' : '#748c94',
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 0,
                  marginTop: 5,
                  color: focused ? 'blue' : '#748c94',
                }}>
                More
              </Text>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
