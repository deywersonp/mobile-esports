import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { Home } from '../screens/Home';
import { Game } from '../screens/Game';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="sing-in"
        component={SignIn}
      />

      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="game"
        component={Game}
      />
    </Navigator>
  )
}

