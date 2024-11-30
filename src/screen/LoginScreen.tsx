import { Alert, Button, Text, View } from "react-native"
import { LoginApi } from "../apis/LoginApis"
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { favMLogin } from "../apis/fav-apis";
import { LoginScreenProps } from "../route/RouteParams";

export const LoginScreen = ({ route, navigation }: LoginScreenProps) => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        LoginApi("admin", "123456").then(ret => {
            dispatch(login(ret));
            navigation.navigate("RootBotTabs");
        }).catch(e => {
            Alert.alert("登录失败", e.message, [{ text: "确定" }]);
        })
    }
    const handleLoginAlternative = () => {
        favMLogin('172.16.5.142:8080', "admin", "123456").then(ret => {
            dispatch(login(ret));
            navigation.navigate("RootBotTabs");
        }).catch(e => {
            console.log(e.message);
            Alert.alert("登录失败", e.message, [{ text: "确定" }]);
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <View className="bg-slate-500 w-32 h-32 mb-4">
                <Text>LoginScreen</Text>
            </View>
            <Button title="Login" onPress={handleLogin} />
            <Button title="Login2" onPress={handleLoginAlternative} />
        </View>
    )
}