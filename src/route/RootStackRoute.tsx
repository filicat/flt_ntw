
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "../screen/HomeScreen";
import { DetailsScreen } from "../screen/DetailsScreen";
import { LoginScreen } from "../screen/LoginScreen";
import { RootStackParamList } from "./RouteParams";
import RootBotTabs from "./RootTabs";


const RootStack = createStackNavigator<RootStackParamList>();
export function RootStackRoute() {
    return (
      <RootStack.Navigator initialRouteName="RootBotTabs" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='RootBotTabs' component={RootBotTabs} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
      </RootStack.Navigator>
    )
}