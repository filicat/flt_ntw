import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Details: undefined;
    Login: undefined;
    RootBotTabs: undefined;
};

export type RootBotTabParamList = {
    Home: undefined;
    Profile: undefined;
    Tab: undefined;
  }


export type HomeScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootBotTabParamList, 'Home'>,
    NativeStackScreenProps<RootStackParamList>
>;

export type ProfileScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootBotTabParamList, 'Profile'>,
    NativeStackScreenProps<RootStackParamList>
>;
export type TabScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootBotTabParamList, 'Tab'>,
    NativeStackScreenProps<RootStackParamList>
>;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
