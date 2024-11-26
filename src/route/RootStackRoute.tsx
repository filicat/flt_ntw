import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen } from "../screen/HomeScreen";
import { DetailsScreen } from "../screen/DetailsScreen";
import { LoginScreen } from "../screen/LoginScreen";

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Login: undefined;
};


const RootStack = createStackNavigator<RootStackParamList>();

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function RootStackRoute() {
    return (
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
      </RootStack.Navigator>
    )
}