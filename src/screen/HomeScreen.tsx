import { Button, Text, View } from "react-native"
import { HomeScreenProps } from "../route/RootStackRoute"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
export function HomeScreen({ route, navigation }: HomeScreenProps) {
    const dispatch = useDispatch();
    const { token, userInfo } = useSelector((state: RootState) => state.auth);
    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Login');
      };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Text>{userInfo?`Welcome ${userInfo.realname}`:'未登录'}</Text>
            {userInfo ?
            <>
                <Button title="Logout" onPress={handleLogout} />
                <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            </>
            :   <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            }
        </View>
    )
}