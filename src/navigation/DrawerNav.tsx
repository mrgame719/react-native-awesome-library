import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreensArray, constant } from '../constants/constants';
import Colors from '../constants/Colors';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: Colors.primary,
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: Colors.black,
        drawerLabelStyle: styles.drawerLabelStyles,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {ScreensArray.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              drawerIcon: ({ color, size }) => (
                <View
                  style={{ backgroundColor: color, width: size, height: size }}
                />
              ),
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  drawerStyle: {
    width: 240,
  },
  drawerItemStyles: {
    borderRadius: constant.borderRadius,
  },
  drawerLabelStyles: {
    fontSize: constant.textFontSize,
    marginHorizontal: -constant.SPACING,
  },
});
