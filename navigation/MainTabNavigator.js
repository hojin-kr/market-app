import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MarketListScreen from '../screens/MarketListScreen';
import MarketDetailScreen from '../screens/MarketDetailScreen';
import MarketCreatScreen from '../screens/MarketCreatScreen';

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

SettingsStack.path = '';

const MarketStack = createStackNavigator(
    {
        MarketList: {
          screen: MarketListScreen,
          navigationOptions: {
            title: "Market"
          }
        },
        MarketDetail : {
          screen : MarketDetailScreen,
          navigationOptions: {
            title: "Market Detail"
          }
        }
    }
);

MarketStack.navigationOptions = {
    tabBarLabel: 'Market',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

MarketStack.path = '';

const MarketCreatStack = createStackNavigator(
  {
    MarketCreat: {
      screen: MarketCreatScreen,
      navigationOptions: {
        title: "Market Creat"
      }
    }
  }
);

MarketCreatStack.navigationOptions = {
    tabBarLabel: 'Create',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};


MarketCreatStack.path = '';


const tabNavigator = createBottomTabNavigator({
    MarketStack,
    MarketCreatStack,
});

tabNavigator.path = '';

export default tabNavigator;
