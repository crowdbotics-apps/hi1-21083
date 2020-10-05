import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings126425Navigator from '../features/Settings126425/navigator';
import Settings126410Navigator from '../features/Settings126410/navigator';
import NotificationList126409Navigator from '../features/NotificationList126409/navigator';
import Maps126408Navigator from '../features/Maps126408/navigator';
import Settings126393Navigator from '../features/Settings126393/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings126425: { screen: Settings126425Navigator },
Settings126410: { screen: Settings126410Navigator },
NotificationList126409: { screen: NotificationList126409Navigator },
Maps126408: { screen: Maps126408Navigator },
Settings126393: { screen: Settings126393Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
