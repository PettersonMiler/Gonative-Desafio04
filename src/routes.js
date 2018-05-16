import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from 'styles';

import Main from 'pages/main';
import Details from 'pages/details';
import Shop from 'pages/shop';

const createstackNavigatorOptions = {
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    height: metrics.heightHeader,
  },
  headerTintColor: colors.red,
  headerBackTitle: null,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: metrics.fontHeader,
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
};

const mainNav = createStackNavigator(
  {
    Main: { screen: Main },
    Details: { screen: Details },
  },
  {
    navigationOptions: createstackNavigatorOptions,
  },
);

const shopNav = createStackNavigator(
  {
    Shop: { screen: Shop },
  },
  {
    navigationOptions: createstackNavigatorOptions,
  },
);

const Routes = createBottomTabNavigator(
  {
    Main: {
      screen: mainNav,
    },
    Shop: {
      screen: shopNav,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => { /* como corrigir esse erro de proptypes? */
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Main') {
          iconName = 'home';
        } else if (routeName === 'Shop') {
          iconName = 'shopping-cart';
        }

        return <Icons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.grey,
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: colors.white,
      },
      tabStyle: {
        height: metrics.heightHeader,
      },
      indicatorStyle: {
        backgroundColor: colors.red,
      },
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default Routes;

